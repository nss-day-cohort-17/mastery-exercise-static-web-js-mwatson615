

var foliageInput = document.getElementById("letter");
var heightInput = document.getElementById("number");
var addButton = document.getElementById("treeButton");

addButton.addEventListener("click", other);
foliageInput.addEventListener("keypress", entKey);
heightInput.addEventListener("keypress", entKey);





function entKey(e) {
	if (e.code === "Enter") {
		other();
	}
}


function other() {
	var treeChars = {"foliage" : "" , "height" : ""}
	treeChars.foliage = foliageInput.value;
	treeChars.height = heightInput.value;

	if (treeChars.foliage === "" || treeChars.height === "") {
		alert("Both fields must have a value");
	} else {
	makeTree(treeChars);
}
}

function makeTree(a) {
	var treeSpaces = " "
	var treeWidth = 0;
	for (i = 1; i <= a.height; i+1) {
			--a.height;
			treeWidth++;
			console.log(treeSpaces.repeat(a.height) + a.foliage.repeat(treeWidth++));
		}
}
