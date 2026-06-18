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
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.





// // ------------ Page 2 Arrays ----------------------------




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