const container = document.querySelector("#container")

// creates grid for the first time
let size = 16
function drawgrid(size) {
    sizeforgrid = size * size
    grid = sizeforgrid
    containerhw = 31 * size + "px"
    for (let i = 0; i < grid; i += 1){
    const content = document.createElement("div");
    content.classList.add("mydiv");
    content.style.width = `calc(100% / ${size})`; 
    content.style.height = `calc(100% / ${size})`;
    container.appendChild(content)
    mouse()
    };
}

drawgrid(size)
// runs all of the time: mouse over color changes
function mouse() {
    const boxes = document.querySelectorAll("div.mydiv");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", changecolor)
        box.addEventListener("mouseleave", exitcolor)
    })
}

// function for mouseover color change
function changecolor () {
    r = Math.random()*500
    g = Math.random()*500
    b = Math.random()*500
    this.style.backgroundColor = "rgb(" + r + "," + g + "," + b
}
// function for exit color
function exitcolor () {
    this.style.backgroundColor = "blue"
}

const button = document.getElementById("btn")
button.addEventListener("click", makegrid)


// this function gets user input for grid size
function makegrid () {
    size = prompt("Please enter grid size", "16")
    document.getElementById("gridsize").textContent = size
    removegrid(size);
    drawgrid(size);
}

// need to create a function to remove the old grid
function removegrid(size) {
    const content = document.getElementsByClassName("mydiv");
    while (content.length > 0) {
        content[0].remove()
    }
    };
