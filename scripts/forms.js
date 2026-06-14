const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;



// Product Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const select =
document.querySelector("#product");


products.forEach(product => {

const option =
document.createElement("option");


option.value =
product.id;


option.textContent =
product.name;


select.appendChild(option);

});





// Get current review count
let reviewCount =
localStorage.getItem("reviewCount");


// First visit
if (reviewCount === null) {

    reviewCount = 0;

}


// Increase count
reviewCount++;


// Save updated value
localStorage.setItem(
    "reviewCount",
    reviewCount
);


// Display on page
document.querySelector(
    "#reviewCount"
).textContent = reviewCount;