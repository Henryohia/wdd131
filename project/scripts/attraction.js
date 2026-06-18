const attractions = [
{
    name: "Olumo Rock",
    location: "Abeokuta, Ogun State",
    category: "Historical",
    description: "A historic rock formation that served as a refuge for the Egba people.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Elevator_gears_at_Olumo.jpg"
},

{
    name: "Lekki Conservation Centre",
    location: "Lagos State",
    category: "Nature",
    description: "Home to Africa's longest canopy walkway and diverse wildlife.",
    image: "https://treehousemap.com/wp-content/uploads/2025/09/Lekki-Conservation-Centre-%C2%A9-H-W-Schlieper-1-6.jpg"
},

{
    name: "Yankari National Park",
    location: "Bauchi State",
    category: "Nature",
    description: "Nigeria's largest wildlife park featuring elephants and warm springs.",
    image: "https://www.nationalparks.africa/wp-content/uploads/2019/10/Yankari-National-Park1.jpg"
},

{
    name: "Osun-Osogbo Sacred Grove",
    location: "Osun State",
    category: "Cultural",
    description: "A UNESCO World Heritage Site with sacred forests and shrines.",
    image: "https://media.worldofinteriors.com/photos/66fc1668edcd1927e8b18be3/4:3/w_1920,c_limit/osungroveWOT3.jpg"
},

{
    name: "Obudu Mountain Resort",
    location: "Cross River State",
    category: "Nature",
    description: "A mountain resort known for its cool climate and scenic views.",
    image: "https://pretoria.foreignaffairs.gov.ng/wp-content/uploads/sites/122/2022/03/obudu.jpg"
},

{
    name: "Zuma Rock",
    location: "Niger State",
    category: "Historical",
    description: "A famous monolith often called the Gateway to Abuja.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/73/58/63/the-face.jpg?w=900&h=500&s=1"
},

{
    name: "Idanre Hills",
    location: "Ondo State",
    category: "Nature",
    description: "A collection of spectacular hills with ancient settlements.",
    image: "https://idanreland.com/wp-content/uploads/2019/12/Idanre-Oke-Idanre-View-over-Rest-Stop-3-scaled.jpg"
},

{
    name: "Awhum Waterfall",
    location: "Enugu State",
    category: "Nature",
    description: "A beautiful waterfall surrounded by lush vegetation.",
    image: "https://articles.connectnigeria.com/wp-content/uploads/2019/03/Agbokim-waterfalls-3.jpg"
},

{
    name: "Kajuru Castle",
    location: "Kaduna State",
    category: "Historical",
    description: "A medieval-style castle built on a hilltop.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Kajuru_Castle.jpg"
},

{
    name: "Nike Art Gallery",
    location: "Lagos State",
    category: "Cultural",
    description: "One of Africa's largest art galleries showcasing Nigerian art.",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*ZJOnoVpTQH6-i4J35LS2oA@2x.jpeg"
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