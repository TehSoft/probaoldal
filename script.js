const gomb = document.querySelector('.main-gomb');
const szöveg = document.querySelector('.szoveg');
const resetGomb = document.querySelector('.reset-gomb');

let kattintasSzamlalo = 0;
resetGomb.style.display = 'none';

gomb.addEventListener('click', function() {
    kattintasSzamlalo++;
    szöveg.textContent = "Kapsz " + kattintasSzamlalo + " libacombot!";
    if(kattintasSzamlalo === 1) {
        resetGomb.style.display = 'block';
    }
});

resetGomb.addEventListener('click', function() {
    if(kattintasSzamlalo > 0) {
        kattintasSzamlalo = 0;
        szöveg.textContent = "";
        resetGomb.style.display = 'none';
    }
});
