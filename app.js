let pera = document.getElementById("demo");
async function randomUser() {
  let urlApi = await fetch("https://randomuser.me/api/");
  let rowData = await urlApi.json();
  let text = '';
  text +=`${rowData.results[0].name.title} ${rowData.results[0].name.first} ${rowData.results[0].name.last} <br> ${rowData.results[0].gender} <br> ${rowData.results[0].location.country}`;
  pera.innerHTML = text;

  
}
