const foods = [

{
    name: "Jollof Rice",
    region: "Southern Nigeria",
    description: "A spicy tomato-based rice dish loved across Nigeria.",
    image: "images/jollof-rice.webp"
},

{
    name: "Pounded Yam & Egusi Soup",
    region: "Southern Nigeria",
    description: "A smooth yam dough served with rich melon seed soup.",
    image: "https://wigmoretrading.com/wp-content/uploads/2024/08/iStock-1398351215-1.jpg"
},

{
    name: "Suya",
    region: "Northern Nigeria",
    description: "Spicy grilled meat skewers sold as popular street food.",
    image: "images/suya.webp"
},

{
    name: "Akara, Pap, Eggs, and Bread",
    region: "Across Nigeria",
    description: "Deep-fried bean cakes commonly eaten for breakfast.",
    image: "images/akara.webp"
},

{
    name: "Amala & Ewedu",
    region: "Southwest Nigeria",
    description: "A traditional Yoruba meal served with soup made from jute leaves.",
    image: "images/amala.webp"
}

];

const container =
document.querySelector("#food-container");

function displayFood(list){

container.innerHTML = "";

list.forEach(food => {

const card =
document.createElement("article");

card.classList.add("card");

card.innerHTML = `

    <img src="${food.image}" alt="${food.name}" loading="lazy">

    <h3>${food.name}</h3>

    <p><strong>Region:</strong> ${food.region}</p>

    <p>${food.description}</p>

`;

container.appendChild(card);

});

}

displayFood(foods);


// FOOTER YEAR
document.querySelector("#year").textContent =
new Date().getFullYear();