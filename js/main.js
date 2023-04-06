import { meses, aniversariantes } from './model/aniversariantes.js';

const mesesHTML = document.querySelector('.meses')

for (const mes in meses) {
    let aniversariantesDoMes = []
    let aniversariantesDoMesStr = ''

    for (const aniversariante of aniversariantes) {
        if (aniversariante.mes == Number(mes) + 1) {
            aniversariantesDoMes.push(`<p>${aniversariante.data} - ${aniversariante.nome}</p>`) 
        }
    }

    aniversariantesDoMes.sort()

    for (const i in aniversariantesDoMes){
        aniversariantesDoMesStr += aniversariantesDoMes[i]
    }

    console.log(aniversariantesDoMes)

    mesesHTML.innerHTML += `
        <div class="content">
            <h2>${meses[mes]}</h2>
            <hr>
            <div class="aniversariantes">${aniversariantesDoMesStr}</div>
        </div>
    `
}