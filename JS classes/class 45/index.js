const div = document.querySelector(".container")
async function fetchApi(){
    let response =  await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    data.forEach(element => {
      div.innerHTML += `
      <p>${element.id}</p>
      <p>${element.title}</p>
      <button onclick="showData(${element.id})" >Read More</button>
      `;
    });
    console.log(data);
}

fetchApi();

function showData(id){
  console.log(id);
  localStorage.setItem("id", JSON.stringify(id));
  window.location = "home.html"
}