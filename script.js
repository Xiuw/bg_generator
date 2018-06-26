var css= document.querySelector("h3");
var color1= document.querySelector(".color1")
var color2= document.querySelector(".color2")
var body = document.getElementById("gradient");



function setGradient(){
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", "+ color2.value
	+ ")";
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);




var setColor = document.querySelector("button");

function randomBgColor(){
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var bgColor= "rgb(" + x + "," + y + "," + z + ")";

	// body.style.background=bgColor;
	return bgColor;
}


function randomPick(col1,col2){
	body.style.background = 
	"linear-gradient(to right," 
	+ randomBgColor()
	+ ", "+ randomBgColor()
	+ ")";

}




setColor.addEventListener("click", randomPick);


