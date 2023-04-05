import aniversariantes from './model/aniversariantes.js';

const aniversariantesHTML = document.querySelector(".aniv")

function displayAniversariantes(flag)
{
    aniversariantesHTML.innerHTML += `
    <p>${flag.data} - ${flag.nome}</p>
    `
}

aniversariantes.forEach(displayAniversariantes)

// aniversariantesHTML.innerHTML += `
    // <div class="flag col-2 my-2 text-center">
    //     <img src="${flag.image}" alt="${flag.name}">
    //     <p>${flag.name}</p>
    // </div> 
    // `