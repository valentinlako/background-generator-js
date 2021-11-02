var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".randomBtn");
var currentCss = body.style.background;

//color input match the background
body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

//set the background on action = input
function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}
function generateRandom() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	var red2 = Math.floor(Math.random() * 256);
	var green2 = Math.floor(Math.random() * 256);
	var blue2 = Math.floor(Math.random() * 256);

body.style.background = "linear-gradient(to right, rgb(" 
	+ red + ", " + green + ", " + blue + "), rgb("
	+ red2 + ", " + green2 + ", " + blue2 + ")";

	css.textContent = body.style.background + ";";
	//rgb to hex for input value transformation
	color1.value = "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue); 
	color2.value = "#" + ColorToHex(red2) + ColorToHex(green2) + ColorToHex(blue2); 
}

//rgba to hex
function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}


css.innerHTML = body.style.background;


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", generateRandom);

