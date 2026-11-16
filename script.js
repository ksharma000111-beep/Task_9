const redBtn = document.getElementById("red");

const greenBtn = document.getElementById("green");

const blueBtn = document.getElementById("blue");

const yellowBtn = document.getElementById("yellow");

const resetBtn = document.getElementById("reset");

const randomBtn = document.getElementById("random");

const colorName = document.getElementById("colorName");




function changeColor(color, name) {

    document.body.style.backgroundColor = color;

    colorName.innerText = "Selected Color: " + name;

}




redBtn.addEventListener("click", function () {

    changeColor("red", "Red");

});




greenBtn.addEventListener("click", function () {

    changeColor("green", "Green");

});




blueBtn.addEventListener("click", function () {

    changeColor("blue", "Blue");

});




yellowBtn.addEventListener("click", function () {

    changeColor("yellow", "Yellow");

});




resetBtn.addEventListener("click", function () {

    changeColor("#f0f0f0", "Default");

});




randomBtn.addEventListener("click", function () {

    const randomColor = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    changeColor(randomColor, randomColor.toUpperCase());

});