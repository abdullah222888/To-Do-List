import React, { useState, useEffect } from 'react'
import Exercise from './Exercise'
import axios from 'axios'
const Home = () => {

  const [exercises, setExercises] = useState([])
  const [newExercise, setNewExercise] = useState({
    name: '',
    duration: 0,
    difficulty: '',
    imageUrl: '', // Add imageUrl property for the image
  });

  const ReadAPI = async () => {
    const res = await fetch('http://localhost:5000/api/exercises')
    const data = await res.json()
    setExercises(data)
  }

  const addExercise = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      await axios.post('http://localhost:5000/api/exercises', newExercise);
      ReadAPI(); // Refresh the exercises after addition
      setNewExercise({
        name: '',
        duration: 0,
        difficulty: '',
        imageUrl: '', // Clear imageUrl after adding the exercise
      });

      // Display alert when a new exercise is added
      window.alert('New exercise added successfully!');
    } catch (error) {
      console.error('Error adding exercise: ', error);
    }
  };

  const deleteExercise = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/exercises/${id}`);
      ReadAPI(); // Refresh the exercises after deletion
    } catch (error) {
      console.error('Error deleting exercise: ', error);
    }
  };

  const handleInputChange = (e) => {
    console.log(e.target.name)
    setNewExercise({
      ...newExercise,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    ReadAPI()
  }, [])
  

  return (
    <div className='Home-Container'>
      {/* Read/Delete */}
      <div className="Home-Read-Container">
        { exercises.map((entry) => {
          return (
            <Exercise entryprop={entry} deleteExercise={deleteExercise} />
          )
        }) }
      </div>

      {/* Update */}

      {/* Create */}
      <div className="add-exercise-form">
        <h3>Add New Exercise</h3>
        <br />
        <form onSubmit={addExercise}>
          <input
            type="text"
            name="name"
            placeholder="Exercise Name"
            value={newExercise.name}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="">Duration:</label>
          <input
            type="number"
            name="duration"
            placeholder="Duration (min)"
            value={newExercise.duration}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="difficulty"
            placeholder="Difficulty"
            value={newExercise.difficulty}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newExercise.imageUrl}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Add Exercise</button>
        </form>
      </div>
    </div>
  )
}

export default Home