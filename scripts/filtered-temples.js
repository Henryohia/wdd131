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








const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 12000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },

  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },

  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, June, 18",
    area: 10000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
    {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 12000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 15",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg"
  },
];


// Loop through the array and create "temple cards" for each temple by displaying:
// The name of the temple.
// The location of the temple.
// The date the temple was dedicated.
// The total area of the temple in square feet.
// The provided image of the temple (an absolute address), making sure to include an appropriate alt value such as the name of the temple.
// Use native lazy loading for each temple image.

// const templeCardsContainer = document.getElementById("temple-cards");

// temples.forEach(temple => {

//     // Create a card.
//     const card = document.createElement("div");


//     // Create elements for the temple information and image, and append them to the card.
//     const name = document.createElement("h2");
//     const location = document.createElement("p");
//     const dedicated = document.createElement("p");
//     const area = document.createElement("p");
//     const image = document.createElement("img");


//     // Set the content of the elements.
//     name.textContent = temple.templeName;

//     location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

//     dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

//     area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

//     image.src = temple.imageUrl;
//     image.alt = temple.templeName;
//     image.loading = "lazy";
//     image.width = 600; // Set a fixed width for the image (optional)
//     image.height = 350; // Set a fixed height for the image (optional)

//     //Add elements to the card.
//     card.appendChild(name);
//     card.appendChild(location);
//     card.appendChild(dedicated);
//     card.appendChild(area);
//     card.appendChild(image);

//     card.classList.add("temple-card");
//     // card.innerHTML = `
//     //     <h2>${temple.templeName}</h2>
//     //     <p><strong>Location:</strong> ${temple.location}</p>
//     //     <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
//     //     <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
//     //     <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
//     // `;
//     templeCardsContainer.appendChild(card);
// });


createTempleCard(temples);



function createTempleCard(filteredTemples) {
    document.querySelector("#temple-cards").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label"><strong>Location:</strong></span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label"><strong>Dedicated:</strong></span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label"><strong>Area:</strong></span> ${temple.area.toLocaleString()} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.templeName);
        image.setAttribute("loading", "lazy");
        image.width = 500;
        image.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector("#temple-cards").appendChild(card);
    });
}


// Respond to the main navigation menu items by filtering and displaying the temples as follows:
// Old – temples built before 1900
// New – temples built after 2000
// Large – temples larger than 90,000 square feet
// Small – temples smaller than 10,000 square feet
// Home – displays all the temples stored in the array.


const oldLink = document.getElementById("old");
const newLink = document.getElementById("new");
const largeLink = document.getElementById("large");
const smallLink = document.getElementById("small");
const homeLink = document.getElementById("home");

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {

        let heading = document.querySelector("h1");
        heading.textContent = "Old Temples";
        const dedicatedYear = new Date(temple.dedicated).getFullYear();
        return dedicatedYear < 1900;
    }));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const dedicatedYear = new Date(temple.dedicated).getFullYear();
        let heading = document.querySelector("h1");
        heading.textContent = "New Temples";
        return dedicatedYear > 2000;
    }));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        let heading = document.querySelector("h1");
        heading.textContent = "Large Temples";
        return temple.area > 90000;
    }));
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        let heading = document.querySelector("h1");
        heading.textContent = "Small Temples";
        return temple.area < 10000;
    }));
});

homeLink.addEventListener("click", () => {
    let heading = document.querySelector("h1");
    heading.textContent = "All Temples";
    createTempleCard(temples);
});
