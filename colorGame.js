// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]

var numSquares = 6;

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); // colors[3]
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");


easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#232323";
	messageDisplay.textContent = "";

});


hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6;
	//generate new colors
	colors = generateRandomColors(numSquares);

	//pick a random color from array
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
	messageDisplay.textContent = "";

});

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numSquares);

	//pick a random color from array
	pickedColor = pickColor();
	
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			resetButton.textContent = "PLAY AGAIN?";
			messageDisplay.textContent = "CORRECT";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "TRY AGAIN!";
		}
	});
}


function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum]; // colors is an array
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

