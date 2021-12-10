const paintColors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Pink",
  "Purple",
  "White",
  "Black",
  "Gray",
];
const wheelColors = ["White", "Black", "Silver"];

let carColor = paintColors[Math.floor(Math.random() * paintColors.length)];
let wheelColor = wheelColors[Math.floor(Math.random() * wheelColors.length)];

//display the random paint and wheel color as soon as the page loads
document.getElementById("paint-color").innerText = carColor + " Paint";
document.getElementById("wheel-color").innerText = wheelColor + " Wheels";

function getSpec() {
  let newcarColor = paintColors[Math.floor(Math.random() * paintColors.length)];
  let newwheelColor =
    wheelColors[Math.floor(Math.random() * wheelColors.length)];

  //display a random paint and wheel color as soon as the page loads
  document.getElementById("paint-color").innerText = newcarColor + " Paint";
  document.getElementById("wheel-color").innerText = newwheelColor + " Wheels";

  //fill the search field with new paint and wheel color
  document.getElementById("query").value = newcarColor + " car with " + newwheelColor + " wheels";
}
