var input = document.getElementById("data");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      search(input.value);
    }
  });


  async function search(data) {
    try {
      if(!Number.isInteger(data)){
        data = data.toLowerCase();
      }
      var url = await fetch('https://pokeapi.co/api/v2/pokemon/'+data)
      .then(response => response.json())
          .then(function (pokeData) {
            console.log(pokeData.types[0]['type']['name']);
            console.log(pokeData.types[1]['type']['name']);
            document.getElementById('data').value = ""
            document.getElementById('name').dataset.id = ""
            document.getElementById('pokemon').src=""
            document.getElementById('height').innerHTML=""
            document.getElementById('weight').innerHTML=""
            document.getElementById('hp').innerHTML=""
            
            document.getElementById('attack').innerHTML=""
            document.getElementById('defense').innerHTML=""
            document.getElementById('special-attack').innerHTML=""
            document.getElementById('special-defence').innerHTML=""
            document.getElementById('speed').innerHTML=""
          // Take the name of pokemon
          document.getElementById('name').innerHTML = pokeData.name+" #"+pokeData.id          
          document.getElementById('name').dataset.id = pokeData.id
          // Take the img of the pokemon
          document.getElementById('pokemon').src = pokeData['sprites']['front_default']
          //Take the height & weight 
          document.getElementById('height').innerHTML= "Height: "+pokeData.height
          document.getElementById('weight').innerHTML="Weight: "+pokeData.weight

          //Stat
          document.getElementById('hp').innerHTML="hp : "+pokeData['stats'][0]['base_stat']
          document.getElementById('attack').innerHTML="att : "+pokeData['stats'][1]['base_stat']
          document.getElementById('defense').innerHTML="def : "+pokeData['stats'][2]['base_stat']
          document.getElementById('special-attack').innerHTML="s-att : "+pokeData['stats'][3]['base_stat']
          document.getElementById('special-defence').innerHTML="s-def : "+pokeData['stats'][4]['base_stat']
          document.getElementById('speed').innerHTML="speed : "+pokeData['stats'][5]['base_stat']
      
          // type
          // typePokemon(pokeData.types[0]['type']['name'])

          // typePokemon(pokeData.types[1]['type']['name'])
          
          img
      
      
        })
    } catch (error) {
      
    }
}

function typePokemon(type){
  switch (pokeData) {
    case "bug":
      
      return "./assets/type_pokemon/bug.png"
    case "dark":
      return "assets\type_pokemon\dark.png"
    case "dragon":
      return "assets\type_pokemon\dragon.png"
    case "electric":
      return "assets\type_pokemon\electr.png"
    case "fairy":
      return "assets\type_pokemon\fairy.png"
    case "fighting":
      return "assets\type_pokemon\fight.png"
    case "fire":
      return "assets\type_pokemon\fire.png"

    case "flying":
      return ""
    case "ghost":
      return ""
    case "ground":
      return ""
    case "grass":
      return ""
    case "ice":
      return ""
    case "normal":
      return ""
    case "poison":
      return ""
    case "psychic":
      return ""
    case "rock":
      return ""
    case "steel":
      return ""
    case "water":
      return "" 
    
    
    
   
   
    
   
   
    
   
   
   
  }
}
function previous(){
  var id = document.getElementById('name').dataset.id
  if(id > 1){
    id--
    search(id)
  }
}

function next(){
  var id = document.getElementById('name').dataset.id
  id++
  search(id)
}