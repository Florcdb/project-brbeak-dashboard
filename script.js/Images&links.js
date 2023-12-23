
let randomimages = document.getElementById('randomimages');
let firstimage = document.getElementById('firstimage')


function getRandomImage() {
    const randomimg = Math.floor(Math.random() * 10) + 1;
    return `/assets/${randomimg}.jpg`;
}

function cambiarImagen() {
    const imagePath = getRandomImage();
    randomimages.src = imagePath;

}

const imagePath = getRandomImage();
console.log(imagePath);


setInterval(cambiarImagen,4000);


localStorage.setItem('clave', 'valor')
const valor = localStorage.getItem('clave')


/*
function getFirstImage({ 
    const firstimage= 
 
})
setTimeout(primeraImg, 1000)*/

const addlink = document.getElementById('nombreEnlace');
const button = document.getElementById('boton');
const nombreEnlaceSpan = document.getElementById('nombreEnlaceSpan');

const obtenerLinkLocalStorage = () => localStorage.getItem('nombreEnlace');
let nombreEnlace = obtenerLinkLocalStorage();

const guardarLinksLocalStorage = (nombre) => localStorage.setItem('nombreEnlace', nombre);

const agregarLinks = () => {
    nombreEnlaceSpan.innerHTML = `<a href="${nombreEnlace}" target="_blank">${nombreEnlace}</a>`;
};


agregarLinks();

button.addEventListener('click', () => {

    const nuevoNombreEnlace = addlink.value;

    guardarLinksLocalStorage(nuevoNombreEnlace);

    nombreEnlace = obtenerLinkLocalStorage();

    agregarLinks();
});



