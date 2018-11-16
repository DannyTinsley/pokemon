// rewrite code to inlclude object oriented method as well as javascript classes (constructor). This will help you to use only one function for all three pokemon.


//Example:
//



// get stats for mew


let mew1= document.getElementById("attack1");

mew1.addEventListener("click", mewStats);


function mewStats (){
  axios.get ("http://fizal.me/pokeapi/api/v2/name/mew.json")
  .then(function (response) {
    console.log(response.data);
    console.log(response.data.abilities[0].ability.name);

    document.write("Speed: " +response.data.stats[0].base_stat);
    //new lines
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    document.write("Main Ability: " +response.data.abilities[0].ability.name);

    //new lines
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    document.write ("Moves: " + " (1) "+ response.data.moves[8].move.name);

    document.write (" (2) " + response.data.moves[1].move.name);

    document.write (" (3) " + response.data.moves[10].move.name);
    // document.write()


} )
}




//get stats for bulbasaur

let bulby= document.getElementById("attack3");

bulby.addEventListener("click", bulbStats);


function bulbStats (){
  axios.get ("http://fizal.me/pokeapi/api/v2/name/bulbasaur.json")
  .then(function (response) {
    console.log(response.data);
    console.log(response.data.abilities[0].ability.name);

    document.write("Speed: " +response.data.stats[0].base_stat);
    //new lines
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    document.write("Main Ability: " +response.data.abilities[0].ability.name);

    //new lines
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    document.write ("Moves: " + " (1) "+ response.data.moves[8].move.name);

    document.write (" (2) " + response.data.moves[1].move.name);

    document.write (" (3) " + response.data.moves[10].move.name);
    // document.write()

  showBulbStats();
  //sanity check below because I need it
  // document.write("Stats");
})
}


function showBulbStats () {
    var bulbBox = document.getElementsByClassName("bulbBox");


    // if (x.style.display=== "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    // document.display="inline-block";
}





// get stats for squirtle

let sq= document.getElementById("attack2");

sq.addEventListener("click", squirtStats);


function squirtStats () {
  axios.get ("http://fizal.me/pokeapi/api/v2/name/squirtle.json")
  .then(function (response) {
    console.log(response.data);
    console.log(response.data.abilities[0].ability.name);

    document.write("Speed: " +response.data.stats[0].base_stat);
    //new lines
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    document.write("Main Ability: " +response.data.abilities[0].ability.name);

    //new lines
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");

    document.write ("Moves: " + " (1) "+ response.data.moves[8].move.name);

    document.write (" (2) " + response.data.moves[1].move.name);

    document.write (" (3) " + response.data.moves[10].move.name);
    // document.write()


} )
}
