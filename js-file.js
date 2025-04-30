// Target or select the element
const container = document.getElementById('container');

// A function to get random color
function getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
}

// Event
container.addEventListener ("click", function (e) {
    if (e.target.classList.contains("box")) {
        e.target.style.backgroundColor = getRandomColor();
    }
})

// Reset color
const resetBtn = document.getElementById('btn')
const boxes = document.getElementsByClassName('box')

function resetButton() {
    return 'white';
}

resetBtn.addEventListener("click", function() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = resetButton();
    }
})