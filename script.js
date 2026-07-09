const gomb = document.querySelector('.main-gomb');
const szöveg = document.querySelector('.szoveg');
const resetGomb = document.querySelector('.reset-gomb');
const extraSzöveg = document.querySelector('.extra');

let kattintasSzamlalo = Number(localStorage.getItem('libacombok')) || 0;
if(kattintasSzamlalo === 0) {
    resetGomb.style.display = 'none';
} else {
    resetGomb.style.display = 'block';
    szöveg.textContent = "Kapsz " + kattintasSzamlalo + " libacombot!";
    for(let i = 0; i < kattintasSzamlalo; i++)extraSzöveg.textContent += "🍗";
}

gomb.addEventListener('click', function() {
    kattintasSzamlalo++;
    localStorage.setItem('libacombok', kattintasSzamlalo);
    szöveg.textContent = "Kapsz " + kattintasSzamlalo + " libacombot!\n";
    extraSzöveg.textContent += "🍗";
    if(kattintasSzamlalo === 1) {
        resetGomb.style.display = 'block';
    }
});

resetGomb.addEventListener('click', function() {
    if(kattintasSzamlalo > 0) {
        extraSzöveg.textContent = "";
        kattintasSzamlalo = 0;
        szöveg.textContent = "";
        resetGomb.style.display = 'none';
        localStorage.removeItem('libacombok');
    }
});
