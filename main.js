var foliage = document.getElementById("letter").value;
var height = document.getElementById("number").value;
var addButton = document.getElementById("treeButton");

addButton.addEventListener("click", makeTree());
foliage.addEventListener("keyup", makeTree());
height.addEventListener("keyup", makeTree());



var treeChars = {"foliage" : foliage , "height" : height}

var treeLetter = treeChars.foliage;
var treeNum = treeChars.height;
var treeSpaces = " "

function makeTree(treeChars) {
	if (KeyboardEvent.key === 13 && foliage != null && height != null) {
		for (i = 1; i <= treeNum+i; i++) {
			if (treeNum < treeNum+i) {
			--treeNum;
			console.log(treeSpaces.repeat(treeNum) + treeLetter.repeat(i++));
	} else {
		alert("Both fields must have a value");
	}
}
}
}
makeTree();
