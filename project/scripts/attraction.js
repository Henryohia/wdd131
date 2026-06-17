const attractions = [
{
    name: "Olumo Rock",
    location: "Abeokuta, Ogun State",
    category: "Historical",
    description: "A historic rock formation that served as a refuge for the Egba people.",
    image: "images/olumo-rock.webp"
},

{
    name: "Lekki Conservation Centre",
    location: "Lagos State",
    category: "Nature",
    description: "Home to Africa's longest canopy walkway and diverse wildlife.",
    image: "images/lekki.webp"
},

{
    name: "Yankari National Park",
    location: "Bauchi State",
    category: "Nature",
    description: "Nigeria's largest wildlife park featuring elephants and warm springs.",
    image: "images/yankari.webp"
},

{
    name: "Osun-Osogbo Sacred Grove",
    location: "Osun State",
    category: "Cultural",
    description: "A UNESCO World Heritage Site with sacred forests and shrines.",
    image: "images/osun.webp"
},

{
    name: "Obudu Mountain Resort",
    location: "Cross River State",
    category: "Nature",
    description: "A mountain resort known for its cool climate and scenic views.",
    image: "images/obudu.webp"
},

{
    name: "Zuma Rock",
    location: "Niger State",
    category: "Historical",
    description: "A famous monolith often called the Gateway to Abuja.",
    image: "images/zuma.webp"
},

{
    name: "Idanre Hills",
    location: "Ondo State",
    category: "Nature",
    description: "A collection of spectacular hills with ancient settlements.",
    image: "images/idanre.webp"
},

{
    name: "Awhum Waterfall",
    location: "Enugu State",
    category: "Nature",
    description: "A beautiful waterfall surrounded by lush vegetation.",
    image: "images/awhum.webp"
},

{
    name: "Kajuru Castle",
    location: "Kaduna State",
    category: "Historical",
    description: "A medieval-style castle built on a hilltop.",
    image: "images/kajuru.webp"
},

{
    name: "Nike Art Gallery",
    location: "Lagos State",
    category: "Cultural",
    description: "One of Africa's largest art galleries showcasing Nigerian art.",
    image: "images/nike-gallery.webp"
}
];

createAttractionCards(attractions);

function createAttractionCards(attractionList) {

    const container =
    document.querySelector("#featuredAttraction");

    container.innerHTML = "";

    attractionList.forEach(attraction => {

        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const category = document.createElement("p");
        const description = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = attraction.name;

        location.innerHTML =
        `<strong>Location:</strong> ${attraction.location}`;

        category.innerHTML =
        `<strong>Category:</strong> ${attraction.category}`;

        description.textContent =
        attraction.description;

        image.setAttribute("src", attraction.image);
        image.setAttribute("alt", attraction.name);
        image.setAttribute("loading", "lazy");
        image.width = 400;
        image.height = 250;

        card.classList.add("card");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(category);
        card.appendChild(description);

        container.appendChild(card);

    });
}