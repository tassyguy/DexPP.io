function setup() {
   loadJSON("abomasnow.json", getPokemon);
}

function getPokemon(data) {
	document.getElementById("name").innerHTML = data.names.en;
	document.getElementById("number").innerHTML = "";
	document.getElementById("region").innerHTML = "";
	document.getElementById("type").innerHTML = "";
	document.getElementById("ability").innerHTML = "";
	document.getElementById("thumbnail").innerHTML = "";
	document.getElementById("description").innerHTML = "";
	document.getElementById("evolutions").innerHTML = "";
	
}