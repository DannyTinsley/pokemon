// get stats for mew


let mew1= document.getElementById("attack1");

mew1.addEventListener("click", mewStats);


function mewStats (){
  axios.get ("http://fizal.me/pokeapi/api/v2/name/mew.json")
  .then(function (response) {
  console.log (response.data);

} )
}




//get stats for bulbasaur

let bulby= document.getElementById("attack3");

bulby.addEventListener("click", bulbStats);


function showBulbStats () {
    var x = document.getElementsByClassName("bulbBox");
    // if (x.style.display=== "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    display="inline-block";
}

function bulbStats (){
  axios.get ("http://fizal.me/pokeapi/api/v2/name/bulbasaur.json")
  .then(function (response) {
  console.log (response.data);
  showBulbStats();
  //sanity check below because I need it
  // document.write("Stats");
} )
}



//get stats for squirtle

let sq= document.getElementById("attack2");

sq.addEventListener("click", squirtStats);





function squirtStats (){
  axios.get ("http://fizal.me/pokeapi/api/v2/name/squirtle.json")
  .then(function (response) {
  console.log (response.data);

} )
}
