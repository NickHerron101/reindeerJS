console.log("hello",2);

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

var loopCount = 7;

for (var i = 0; i < loopCount; i++) {
	var firstPart = colors[i];
	var secondPart = reindeer[i];
	hohohoElement.innerHTML += firstPart + " " + secondPart + "<br>";
}

