console.log("HI!")

document.getElementById("treeButton").addEventListener("click", function makeTree(foliage, height) {
	if (foliage === "" || height === "") {
		alert("Both fields must have a value")
	}
})



var foliage = document.getElementById("letter").value;
var height = document.getElementById("number").value;

var treeChars = {"foliage" : foliage, "height" : height}

function makeTree(treeChars) {
	for (i = 1; i < height; i++) {
		height + 2;
		foliage * height;
	}
}
	console.log(treeChars)
