/*     All Global Variables    */
const screen = document.querySelector(".container");
const btnGrid = document.querySelector(".grid");
const interface = document.getElementById("interface");
const hot = document.querySelector(".btn-hot");
const cold = document.querySelector(".btn-cold");
const erase = document.querySelector(".erase");

/*     Fancy Color Variables     */
let coldColor;
let hotColor;


/*     Function Components      */
function makeGrid (userInput) {
    for (i = 0; i < userInput ** 2; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = "white";
    box.addEventListener("mouseover", () => box.style.backgroundColor = "black");
    screen.appendChild(box);
}
}

function resetColorHot () {
    for (let i =0; i < screen.children.length; i++) {
        screen.children[i].addEventListener("mouseover", () => {
            randomHot();
            screen.children[i].style.backgroundColor = `${hotColor}`;
        }
    )}
}

function resetColorCold () {
    for (let i =0; i < screen.children.length; i++) {
        screen.children[i].addEventListener("mouseover", () => {
            randomCold();
            screen.children[i].style.backgroundColor = `${coldColor}`;
        }
    )}
}

function eraser () {
    for (let i =0; i < screen.children.length; i++) {
        screen.children[i].addEventListener("mouseover", () => {
            screen.children[i].style.backgroundColor = "#ffffff";
        }
    )}
}

function resetScreen () {
    while (screen.firstChild) {
        screen.removeChild(screen.lastChild)
    }
}

function randomCold () {
    let random = Math.floor(Math.random()*100);
    if (random <10) {coldColor = "#413c69"}
    else if (random <20) {coldColor = "#4a47a3"}
    else if (random <30) {coldColor = "#709fb0"}
    else if (random <40) {coldColor = "#a7c5eb"}
    else if (random <50) {coldColor = "#4b778d"}
    else if (random <60) {coldColor = "#28b5b5"}
    else if (random <70) {coldColor = "#8fd9a8"}
    else if (random <80) {coldColor = "#d2e69c"}
    else if (random <90) {coldColor = "#51c4d3"}
    else {coldColor = "#126e82"};
}

function randomHot () {
    let random = Math.floor(Math.random()*100);
    if (random <10) {hotColor = "#26001b"}
    else if (random <20) {hotColor = "#810034"}
    else if (random <30) {hotColor = "#ff005c"}
    else if (random <40) {hotColor = "#fff600"}
    else if (random <50) {hotColor = "#810000"}
    else if (random <60) {hotColor = "#630000"}
    else if (random <70) {hotColor = "#cc561e"}
    else if (random <80) {hotColor = "#ef8d32"}
    else if (random <90) {hotColor = "#beca5c"}
    else {coldColor = "#7b113a"};
}

/*         Button Control        */

btnGrid.addEventListener("click", () => {
    let userInput = prompt ("Please enter how many grids you would like per Row and Column");
    resetScreen();
    makeGrid(userInput);
    screen.style.gridTemplateColumns = `repeat(${userInput}, auto`;
    screen.style.gridTemplateRows = `repeat(${userInput}, auto`;
    interface.textContent = "To reset, press Grid again! You can change colors any time :)"
})

hot.addEventListener("click", resetColorHot);

cold.addEventListener("click", resetColorCold);

erase.addEventListener("click", eraser);





