// 1. se agrega los eventos del dom.
// donde agrega la informacion de la tarea.
const input = document.querySelector('input');
//donde se acepta la informacion de la tarea con el boton.
const addBtn = document.querySelector('.btn-add');
//donde se agrega la tarea a la lista.
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

// 2. se agrega el evento de click al boton.
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); // evita el comportamiento por defecto  del formulario se valida que el input no este vacio.
    const text = input.value;

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text; // se agrega el texto al parrafo.

    li.appendChild(p); // se agrega el parrafo al li.
    ul.appendChild(li); // se agrega el li a la lista.

});