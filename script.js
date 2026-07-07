const gomb = document.querySelector('.main-gomb');
const szöveg = document.querySelector('.szoveg');
const resetGomb = document.querySelector('.reset-gomb');

let kattintasSzamlalo = Number(localStorage.getItem('libacombok')) || 0;
if(kattintasSzamlalo === 0) {
    resetGomb.style.display = 'none';
} else {
    resetGomb.style.display = 'block';
    szöveg.textContent = "Kapsz " + kattintasSzamlalo + " libacombot!";
}

gomb.addEventListener('click', function() {
    kattintasSzamlalo++;
    localStorage.setItem('libacombok', kattintasSzamlalo);
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
        localStorage.removeItem('libacombok');
    }
});
