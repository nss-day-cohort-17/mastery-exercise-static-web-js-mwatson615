var foliage = document.getElementById("letter").value;
var height = document.getElementById("number").value;
var addButton = document.getElementById("treeButton");

addButton.addEventListener("click", makeTree());
foliage.addEventListener("keyup", makeTree());
height.addEventListener("keyup", makeTree());



var treeChars = {"foliage" : "*" , "height" : 5}

var treeLetter = treeChars.foliage;
var treeNum = treeChars.height;
var treeSpaces = " "
var treeWidth = 0;

function makeTree(treeChars) {
	if (KeyboardEvent.key !== 13 || (foliage == null && height == null)) {
		alert("Both fields must have a value");
	} else {
		for (i = 1; i <= treeNum; i+1) {
			--treeNum;
			treeWidth++;
			console.log(treeSpaces.repeat(treeNum) + treeLetter.repeat(treeWidth++));
	}
	}
}

makeTree();
