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