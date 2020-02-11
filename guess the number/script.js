function $(id) {
	return document.getElementById(id)
}
$("Tryagain").addEventListener("click", function () {
	$("box-header").style.color = "teal";
	$("cover").style.opacity = "1";
	$("box").style.display = "none";
	var input = $("input");
	var question = $("question");
	var display = $("display");
	var submit = $("submit");
	var lifeDisplay = $("lives");


	var levels = prompt("Type 1 for level one, Type 2 for level two, 3 for level three and 4 for level four! ( : )")
	var lives, randNum;

	//Storing the random number

	randNum = Math.floor(Math.random() * 45 + 1)

	console.log("Random:" + randNum);

	//Checking levels and giving lives according to the levels

	if (levels === "1") {
		lives = 12;
	} else if (levels === "2") {
		lives = 9;
	} else if (levels === "3") {
		lives = 6;
	} else if (levels === "4") {
		lives = 4;
	}
	function displayLives() {
		lifeDisplay.innerHTML = "Lives: " + lives;
	}

	displayLives();


	console.log("hello")

	display.innerHTML = "";

	input.value = "Type the number";

	input.addEventListener("click", () => {
		input.value = "";
	}, false);

	submit.addEventListener("click", () => {
		console.log("submitted")
		//  Checking Whether The Value is there or not

		if (input.value == "") {
			display.innerHTML = "Please enter some value. ; )";
			console.log("empty value");
			console.log("display:", display)
		}

		//Checking the number with random number
		if (input.value == randNum) {
			display.innerHTML = "Correct! The random number was " + randNum + ".!*- - *!.   ( : 0";
		} else if (input.value < randNum - 2) {
			lives--;
			displayLives();
			display.innerHTML = "Too less!";
		} else if (input.value < randNum || input.value > randNum) {
			lives--;
			displayLives();
			display.innerHTML = "Close!";
		} else if (input.value > randNum + 2) {
			lives--;
			displayLives();
			display.innerHTML = "Large! Too Large!!!";
		}

		if (lives == 0) {
			$("box-header").style.color = "red";
			$("box-header").innerHTML = ") : !!! You Lost !!! : ("
			$("box").style.display = "block";
		}
	})
})

