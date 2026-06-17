// last modified
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;



// Responsive Nav

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



// Get current review count / Local Storage
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



// Local storage/ current date and time display
const currentDate = document.querySelector("#currentDate");

const now = new Date();

currentDate.textContent =
`Current Date and Time: ${now.toLocaleString()}`;





//Page 2 - Random featured attraction generator

const attractions = [

{
    name: "Olumo Rock",
    location: "Abeokuta, Ogun State",
    image: "images/olumo-rock.webp"
},

{
    name: "Lekki Conservation Centre",
    location: "Lagos State",
    image: "images/lekki-conservation.webp"
},

{
    name: "Yankari National Park",
    location: "Bauchi State",
    image: "images/yankari.webp"
},

{
    name: "Obudu Mountain Resort",
    location: "Cross River State",
    image: "images/obudu.webp"
}

];

const featuredSection =
document.querySelector("#featuredAttraction");

const randomIndex =
Math.floor(Math.random() * attractions.length);

const attraction =
attractions[randomIndex];

featuredSection.innerHTML = `
    <div class="featured-card">
        <img
            src="${attraction.image}"
            alt="${attraction.name}"
            loading="lazy">

        <h3>${attraction.name}</h3>

        <p>${attraction.location}</p>
    </div>
`;

// page 2 - Attractions and Food Sections

const attractions = [

{
    name: "Olumo Rock",
    location: "Abeokuta, Ogun State",
    category: "Historical",
    description:
    "A historic rock formation that served as a refuge during ancient wars.",
    image:
    "images/olumo-rock.webp"
},

{
    name: "Lekki Conservation Centre",
    location: "Lagos State",
    category: "Nature",
    description:
    "Home to Africa's longest canopy walkway and rich wildlife.",
    image:
    "images/lekki-conservation.webp"
},

{
    name: "Yankari National Park",
    location: "Bauchi State",
    category: "Nature",
    description:
    "Nigeria's premier wildlife park featuring elephants and warm springs.",
    image:
    "images/yankari.webp"
},

{
    name: "Osun-Osogbo Sacred Grove",
    location: "Osun State",
    category: "Cultural",
    description:
    "A UNESCO World Heritage Site and sacred forest of the Yoruba people.",
    image:
    "images/osun-grove.webp"
},

{
    name: "Obudu Mountain Resort",
    location: "Cross River State",
    category: "Nature",
    description:
    "A mountain resort known for its cool climate and beautiful scenery.",
    image:
    "images/obudu.webp"
}

];

const container =
document.querySelector("#attractions-container");

function displayAttractions(attractionList) {

    container.innerHTML = "";

    attractionList.forEach(attraction => {

        const card =
        document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `

            <img
                src="${attraction.image}"
                alt="${attraction.name}"
                loading="lazy">

            <h3>${attraction.name}</h3>

            <p><strong>Location:</strong> ${attraction.location}</p>

            <p><strong>Category:</strong> ${attraction.category}</p>

            <p>${attraction.description}</p>

        `;

        container.appendChild(card);

    });

}

displayAttractions(attractions);

document.querySelector("#all")
.addEventListener("click", () => {
    displayAttractions(attractions);
});

document.querySelector("#nature")
.addEventListener("click", () => {

    const natureAttractions =
    attractions.filter(
        attraction => attraction.category === "Nature"
    );

    displayAttractions(natureAttractions);

});

document.querySelector("#historical")
.addEventListener("click", () => {

    const historicalAttractions =
    attractions.filter(
        attraction => attraction.category === "Historical"
    );

    displayAttractions(historicalAttractions);

});

document.querySelector("#cultural")
.addEventListener("click", () => {

    const culturalAttractions =
    attractions.filter(
        attraction => attraction.category === "Cultural"
    );

    displayAttractions(culturalAttractions);

});

document.querySelector("#year").textContent =
new Date().getFullYear();



// faq

document.querySelector("#year").textContent =
new Date().getFullYear();


const questions =
document.querySelectorAll(".question");


questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});





// Food

const foods = [

{
    name: "Jollof Rice",
    region: "West Africa",
    description: "A spicy tomato-based rice dish loved across Nigeria.",
    image: "images/jollof-rice.webp"
},

{
    name: "Pounded Yam & Egusi Soup",
    region: "Southern Nigeria",
    description: "A smooth yam dough served with rich melon seed soup.",
    image: "images/egusi.webp"
},

{
    name: "Suya",
    region: "Northern Nigeria",
    description: "Spicy grilled meat skewers sold as popular street food.",
    image: "images/suya.webp"
},

{
    name: "Akara",
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