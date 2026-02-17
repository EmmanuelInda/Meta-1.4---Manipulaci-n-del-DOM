const titulo = document.getElementById('titulo');
titulo.innerText = "¡Manipulación del DOM!";

const parrafos = document.querySelectorAll('.parrafo');
parrafos.forEach(p => {
    p.style.color = 'blue';
});

const lista = document.getElementById('lista');
const primerLi = lista.querySelector('li');
primerLi.innerText = "Elemento Modificado";

const nuevoLi = document.createElement('li');
nuevoLi.innerText = "Elemento 3";
lista.appendChild(nuevoLi);

const nuevoParrafo = document.createElement('p');
nuevoParrafo.innerText = "Este es un párrafo nuevo";

parrafos[1].parentNode.insertBefore(nuevoParrafo, parrafos[1].nextSibling);

const elementosLi = lista.querySelectorAll('li'); 

if (elementosLi[1]) {
    lista.removeChild(elementosLi[1]);
}

const boton = document.getElementById('boton');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

boton.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

titulo.style.fontSize = '48px';

parrafos[0].style.border = '2px solid red';

const itemsLista = lista.querySelectorAll('li');
itemsLista.forEach(item => {
    item.style.display = 'inline-block';
    item.style.marginRight = '15px';
});
