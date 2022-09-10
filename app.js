function seach(data){
    var test = fetch('https://pokeapi.co/api/v2/pokemon/'+data)
    .then(response => response.json())
    .then(function(pokeData){
        document.getElementById('name').innerHTML = pokeData.name
        document.getElementById('pokemon').src = pokeData['sprites']['front_default']
    })
}