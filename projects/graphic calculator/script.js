function _(id) {
	return document.getElementById(id)
}

var input = _("input");
var value = "";
var
	btn1 = _("btn1"),
	btn2 = _("btn2"),
	btn3 = _("btn3"),
	btn4 = _("btn4"),
	btn5 = _("btn5"),
	btn6 = _("btn6"),
	btn7 = _("btn7"),
	btn8 = _("btn8"),
	btn9 = _("btn9"),
	btn0 = _("btn0"),
	addBtn = _("btn-add"),
	subtractBtn = _("btn-subtract"),
	multiplyBtn = _("btn-multiply"),
	divideBtn = _("btn-divide"),
	equalsBtn = _("btn-equals"),
	clearBtn = _("clear-btn");


function calculate() {
	value = input.value;
	value = value.replace(/x/g, "*");
	value = eval(value);
	input.value = value;
	console.log(value)
}


input.addEventListener("mouseover", () => {
	input.setAttribute("placeholder", "Type a number")
})

document.addEventListener("keydown", (e) => {
	if (e.keyCode === 13) {
		console.log("You Entered");
		calculate();
	}
})

btn1.addEventListener("click", () => {
	input.value += 1;
	console.log("1")
})

btn2.addEventListener("click", () => {
	input.value += 2;
})

btn3.addEventListener("click", () => {
	input.value += 3;
})

btn4.addEventListener("click", () => {
	input.value += 4;
})

btn5.addEventListener("click", () => {
	input.value += 5;
})

btn6.addEventListener("click", () => {
	input.value += 6;
})

btn7.addEventListener("click", () => {
	input.value += 7;
})

btn8.addEventListener("click", () => {
	input.value += 8;
})

btn9.addEventListener("click", () => {
	input.value += 9;
})

btn0.addEventListener("click", () => {
	input.value += 0;
})

addBtn.addEventListener("click", () => {
	input.value += "+";
})

subtractBtn.addEventListener("click", () => {
	input.value += "-";
})

multiplyBtn.addEventListener("click", () => {
	input.value += "x";
})

divideBtn.addEventListener("click", () => {
	input.value += "/";
})

equalsBtn.addEventListener("click", () => {
	calculate()
})

clearBtn.addEventListener("click", () => {
	var str = input.value;
	var array = str.split("")
	array.pop();
	input.value = array.join("");

})


