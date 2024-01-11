const data = localStorage.getItem("id")
const id = JSON.parse(data)
console.log(id);


async function rendertodo() {
    const data = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`)
    const response = await data.json()
    console.log(response);
}