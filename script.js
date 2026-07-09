const gomb = document.querySelector('.főgomb');
const szöveg = document.querySelector('.szöveg');
const szorzógomb = document.querySelector('.szorzógomb');
const resetGomb = document.querySelector('.resetgomb');
const szorzóSzöveg = document.querySelector('.szorzó');

let pontszám = Number(localStorage.getItem('pontok')) || 0;
let szorzó = Number(localStorage.getItem('szorzó')) || 1;
let automata = Number(localStorage.getItem('auto')) || 0;

const frissítés = () => {
    szöveg.textContent = "Pontszám: " + pontszám;
    szorzóSzöveg.textContent = "Kattintásonként " + szorzó + " pont";
    if (pontszám === 0 && szorzó === 1) {
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
    localStorage.setItem('pontok', pontszám);
    localStorage.setItem('szorzó', szorzó);
    localStorage.setItem('auto', automata);
};
frissítés();

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

resetGomb.addEventListener('click', function() {
    szorzógomb.disabled = false;
    pontszám = 0;
    szorzó = 1;
    frissítés();
});
