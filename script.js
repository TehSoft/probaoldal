const gomb = document.querySelector('.főgomb');
const szöveg = document.querySelector('.szöveg');
const szorzógomb = document.querySelector('.szorzógomb');
const resetGomb = document.querySelector('.resetgomb');
const szorzóSzöveg = document.querySelector('.szorzószöveg');
const autoclickszöveg = document.querySelector('.autoclickszöveg');
const autoclickgomb = document.querySelector('.autoclickgomb');

let pontszám = Number(localStorage.getItem('pontok')) || 0;
let szorzó = Number(localStorage.getItem('szorzó')) || 1;
let automata = Number(localStorage.getItem('auto')) || 0;

const frissítés = () => {
    //szöveg
    szöveg.textContent = "Pontszám: " + pontszám;
    szorzóSzöveg.textContent = "Kattintásonként " + szorzó + " pont";
    autoclickszöveg.textContent = "Autoclick: " + automata + " pont/mp";

    //gombok
    if (pontszám === 0 && szorzó === 1 && automata === 0) {
        resetGomb.style.display = 'none';
    } else {
        resetGomb.style.display = 'block';
    }
    if(szorzó < 10) {
        szorzógomb.textContent = `Fejlesztés ára: ${(szorzó + 1) * 10} pont`;
    }
    else if(szorzó < 100){
        szorzógomb.textContent = `Fejlesztés ára: ${(szorzó + 10) * 10} pont`;
    }
    else{
        szorzógomb.textContent = `Fejlesztés elérte a maximumot!`;
        szorzógomb.disabled = true;
    }
    if(automata < 10) {
        autoclickgomb.textContent = `Fejlesztés ára: ${(automata + 1) * 50} pont`;
    }
    else if(automata < 100){
        autoclickgomb.textContent = `Fejlesztés ára: ${(automata + 10) * 50} pont`;
    }
    else{
        autoclickgomb.textContent = `Fejlesztés elérte a maximumot!`;
        autoclickgomb.disabled = true;
    }

    //localStorage mentés
    localStorage.setItem('pontok', pontszám);
    localStorage.setItem('szorzó', szorzó);
    localStorage.setItem('auto', automata);
};
frissítés();

setInterval(() => {
    if(automata > 0){
    pontszám += automata;
    frissítés();
    }
}, 1000);

gomb.addEventListener('click', function() {
    pontszám += szorzó;
    frissítés();
});

szorzógomb.addEventListener('click', function() {
    if(szorzó < 10) {
        if(pontszám < 10 * (szorzó + 1)) {
            alert(`A szorzó növeléséhez legalább ${(szorzó + 1) * 10} pont szükséges.`);
            return;
        }
        szorzó++;
        pontszám -= szorzó * 10;
    }
    else if(szorzó < 100) {
        if(pontszám < 10 * (szorzó + 10)) {
            alert(`A szorzó növeléséhez legalább ${(szorzó + 10) * 10} pont szükséges.`);
            return;
        }
        szorzó += 10;
        pontszám -= szorzó * 10;
    }
    frissítés();
});
autoclickgomb.addEventListener('click', function() {
    if(automata < 10) {
        if(pontszám < 50 * (automata + 1)) {
            alert(`A autoclick növeléséhez legalább ${(automata + 1) * 50} pont szükséges.`);
            return;
        }
        automata++;
        pontszám -= automata * 50;
    }
    else if(automata < 100) {
        if(pontszám < 50 * (automata + 10)) {
            alert(`A autoclick növeléséhez legalább ${(automata + 10) * 50} pont szükséges.`);
            return;
        }
        automata += 10;
        pontszám -= automata * 50;
    }
    frissítés();
});

resetGomb.addEventListener('click', function() {
    szorzógomb.disabled = false;
    autoclickgomb.disabled = false;
    pontszám = 0;
    szorzó = 1;
    automata = 0;
    frissítés();
});
