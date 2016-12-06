

var foliageInput = document.getElementById("letter");
var heightInput = document.getElementById("number");
var addButton = document.getElementById("treeButton");

addButton.addEventListener("click", other);
// foliage.addEventListener("keyup", makeTree);
// height.addEventListener("keyup", makeTree);



var treeChars = {"foliage" : "" , "height" : ""}

var treeSpaces = " "
var treeWidth = 0;


function other() {
	treeChars.foliage = foliageInput.value;
	treeChars.height = heightInput.value;
	
	if (treeChars.foliage === "" || treeChars.height === "") {
		alert("Both fields must have a value");
	}
	makeTree(treeChars);
}

function makeTree(a) {

	for (i = 1; i <= a.height; i+1) {
			--a.height;
			treeWidth++;
			console.log(treeSpaces.repeat(a.height) + a.foliage.repeat(treeWidth++));
		}
}
//KeyboardEvent.key !== 13

makeTree(treeChars);
