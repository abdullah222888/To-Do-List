import React from 'react'

const Exercise = ({entryprop, deleteExercise}) => {
  return (
    <div className="exercise-card" key={entryprop._id}>
        <img src={entryprop.imageUrl} alt="" />
        <h4>{entryprop.name}</h4>
        <p>{entryprop.difficulty}</p>
        <p>{entryprop.duration}</p>
        <div className="exercise-btns">
            <button>Update</button>
            <button onClick={() => deleteExercise(entryprop._id)}>Delete</button>
        </div>
    </div>
  )
}

export default Exercise