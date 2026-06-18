// form page ========

const attract = [
    {name: "Olumo Rock"},
    {name: "Lekki Conservation Centre"},
    {name: "Yankari National Park"},
    {name: "Obudu Mountain Resort"},
    {name: "Osun-Osogbo Sacred Grove"},
    {name: "Zuma Rock"},
    {name: "Kajuru Castle"},
    {name: "Idanre Hills"}

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

const select = document.querySelector("#attraction2");

attract.forEach(item => {

    const option = document.createElement("option");

    option.value = item.name;
    option.textContent = item.name;

    select.appendChild(option);

});