var input = document.getElementById("data");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      search(input.value);
    }
  });


function search(data) {
    var url = fetch('https://pokeapi.co/api/v2/pokemon/'+data)
    .then(response => response.json())
        .then(function (pokeData) {
        console.log(pokeData)
        document.getElementById('name').innerHTML = pokeData.name+" #"+pokeData.id
        document.getElementById('pokemon').src = pokeData['sprites']['front_default']
    })





}

function clear() {
    document.getElementsById('data').value = "";
}