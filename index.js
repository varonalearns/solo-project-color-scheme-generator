// Ran when button is clicked
function getData() {
    // Get the seed color
    let seedColorEl = document.getElementById("seed-color").value;
    seedColorEl = seedColorEl.replace("#", "")

    // Get scheme
    let schemeEl = document.getElementById("scheme").value;

    // Get data from The Color API
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColorEl}&mode=&${schemeEl}&count=5`)
    .then(response => response.json())
    .then(data => render(data.colors))
    .catch(error => console.error(error));
}

// Render colors received from The Colors API
function render(colors) {
    // Select divs with color class
    let colorEl = document.querySelectorAll(".color")

    // Select divs with clean class
    let cleanEl = document.querySelectorAll(".clean")

    // Change .color and .clean divs
    for (let i = 0; i < colors.length; i++) {
        colorEl[i].style.backgroundColor = colors[i].hex.value;
        cleanEl[i].textContent = "#" + colors[i].hex.clean;
    }
}
