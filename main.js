console.log("HI!")

// var foliage = document.getElementById("letter")
// var height = document.getElementById("number")

// document.getElementById("treeButton").addEventListener("click", makeTree() {
// })

// foliage.addEventListener("keyup", makeTree() {
// })

// height.addEventListener("keyup", makeTree() {

// })

/*
var foliage = document.getElementById("letter")
var height = document.getElementById("number")
*/

var treeChars = {"foliage" : "*", "height" : 5}

function makeTree() {
	/*
	if (treeChars.foliage === null || treeChars.height === null) {
		alert("Both fields must have a value")
	}
	*/
	var treeLetter = treeChars.foliage;
	var treeNum = treeChars.height;
	var treeSpaces = " "
	for (i = 1; i <= treeNum+i; i++) {
		console.log(treeSpaces.repeat(--treeNum) + treeLetter.repeat(i++));
	}

}

makeTree();
