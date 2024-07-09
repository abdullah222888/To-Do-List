/* 
queryselector, queryselectorall, getelebyid, getelementbyclass
*/

const container = document.querySelector('.container')

const fetchapi = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    data.map((item) => {
        const h1 = document.createElement('h1')
        container.appendChild(h1).innerHTML = item.id + item.title
    })
}

fetchapi()