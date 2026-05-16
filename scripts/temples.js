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

