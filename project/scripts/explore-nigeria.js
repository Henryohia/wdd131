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





// // ------------ Page 2 Arrays ----------------------------

// page 2 - Attractions and Food Sections

// const attractions = [

//     {
//         name: "Olumo Rock",
//         location: "Abeokuta, Ogun State",
//         category: "Historical",
//         description: "A historic rock formation that served as a refuge for the Egba people during ancient wars.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Olumo_Rock_Abeokuta.jpg"
//     },

//     {
//         name: "Lekki Conservation Centre",
//         location: "Lagos State",
//         category: "Nature",
//         description: "A nature reserve famous for its canopy walkway and wildlife conservation efforts.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Lekki_Conservation_Centre_Canopy_Walkway.jpg"
//     },

//     {
//         name: "Yankari National Park",
//         location: "Bauchi State",
//         category: "Nature",
//         description: "Nigeria's largest wildlife park, home to elephants, baboons, and warm springs.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Yankari_Game_Reserve.jpg"
//     },

//     {
//         name: "Osun-Osogbo Sacred Grove",
//         location: "Osun State",
//         category: "Cultural",
//         description: "A UNESCO World Heritage Site containing shrines, sculptures, and sacred forests.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Osun_Osogbo_Sacred_Grove.jpg"
//     },

//     {
//         name: "Obudu Mountain Resort",
//         location: "Cross River State",
//         category: "Nature",
//         description: "A scenic mountain resort known for its cool weather and breathtaking views.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Obudu_Cattle_Ranch.jpg"
//     },

//     {
//         name: "Nike Art Gallery",
//         location: "Lagos State",
//         category: "Cultural",
//         description: "One of Africa's largest art galleries showcasing Nigerian culture and creativity.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Nike_Art_Gallery_Lagos.jpg"
//     },

//     {
//         name: "Kajuru Castle",
//         location: "Kaduna State",
//         category: "Historical",
//         description: "A medieval-style castle built in the hills of Kaduna with stunning architecture.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Kajuru_Castle.jpg"
//     },

//     {
//         name: "Idanre Hills",
//         location: "Ondo State",
//         category: "Nature",
//         description: "A collection of spectacular hills featuring ancient settlements and hiking trails.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Idanre_Hills.jpg"
//     },

//     {
//         name: "Awhum Waterfall",
//         location: "Enugu State",
//         category: "Nature",
//         description: "A beautiful waterfall surrounded by lush vegetation and spiritual significance.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Awhum_Waterfall.jpg"
//     },

//     {
//         name: "Zuma Rock",
//         location: "Niger State",
//         category: "Historical",
//         description: "A massive monolith often called the Gateway to Abuja and featured on the ₦100 note.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Zuma_Rock_Nigeria.jpg"
//     }

// ];



// createAttractionCard(attractions);


// function createAttractionCard(filteredAttraction) {
//     document.querySelector("#featuredAttraction").innerHTML = "";

//     filteredAttraction.forEach(attraction => {
//         let card = document.createElement("section");
//         let attractionName = document.createElement("h2");
//         let location = document.createElement("p");
//         let category = document.createElement("p");
//         let description = document.createElement("p");
//         let image = document.createElement("img");

//         attractionName.textContent = attraction.name;
//         location.innerHTML = `<span class="label"><strong>Location:</strong></span> ${attraction.location}`;
//         description.innerHTML = `<span class="label"><strong>Description:</strong></span> ${attraction.description}`;
//         category.innerHTML = `<span class="label"><strong>Category:</strong></span> ${attraction.category}`;
//         image.setAttribute("src", attraction.imageUrl);
//         image.setAttribute("alt", attraction.name);
//         image.setAttribute("loading", "lazy");
//         image.width = 500;
//         image.height = 250;

//         card.appendChild(attractionName);
//         card.appendChild(location);
//         card.appendChild(description);
//         card.appendChild(category);
//         card.appendChild(image);

//         document.querySelector("#featuredAttraction").appendChild(card);
//     });
// }



// Page 4 ===========



// guide



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





// FOOTER YEAR
// document.querySelector("#year").textContent =
// new Date().getFullYear();


// REVIEW COUNTER (localStorage)
// let count =
// Number(localStorage.getItem("reviewCount")) || 0;

// count++;

// localStorage.setItem("reviewCount", count);

// document.querySelector("#reviewCount").textContent =
// `You have submitted ${count} review(s).`;


// FORM VALIDATION MESSAGE (optional enhancement)
// const form =
// document.querySelector("form");

// form.addEventListener("submit", (e) => {

// const attraction =
// document.querySelector("#attraction").value;

// if (!attraction) {

// e.preventDefault();

// alert("Please select an attraction before submitting.");

// }

// });