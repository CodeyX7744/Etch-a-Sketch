
let grid = document.querySelector(".grid");
grid.addEventListener("click", function(){
    let sides = prompt("Enter the number of sides.");
    if (  sides > 0 && sides <= 100) {
        makeGrid(sides);
    } else {
        alert("Number of sides should be from 1 to 100.")     
    }
   
});

function makeGrid(sides=16) {
  
    let container = document.querySelector(".container");
    let square = null;
    let containerSize = 960;
    let boxSize = containerSize/sides;

    if (container.hasChildNodes()) {
        removeGrid();
    }

    for (let i = 1; i <= sides; i++) {
        for (let j = 1; j <= sides; j++) {
            square = document.createElement("div");
            square.classList.add("box");
            square.classList.add(`box${i}${j}`);
            square.style.width = boxSize+"px";
            square.style.height = boxSize+"px";

            container.appendChild(square);
        }
    }
    mouseOver();
}

function removeGrid(){
    let container1 = document.querySelector(".container");
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => container1.removeChild(box));
}

 

function mouseOver() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", function() { box.classList.add("mouseover");}));
}

makeGrid();
mouseOver();



