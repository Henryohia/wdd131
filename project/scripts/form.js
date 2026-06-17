// form page ========

const attractions = [
    {name: "Olumo Rock"},
    {name: "Lekki Conservation Centre"},
    {name: "Yankari National Park"},
    {name: "Obudu Mountain Resort"},
    {name: "Osun-Osogbo Sacred Grove"}

];

// const select =
// document.querySelector("#attraction");

// attractions.forEach(item => {

// const option =
// document.createElement("option");

// option.value = item;

// option.textContent = item;

// select.appendChild(option);

// });

const select =
document.querySelector("#attraction");


products.forEach(item => {

const option =
document.createElement("option");


option.value = item.name;


option.textContent =
item.name;


select.appendChild(option);

});