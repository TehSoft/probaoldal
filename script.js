const gomb = document.querySelector('.sajat-gomb');
const szöveg = document.querySelector('.szoveg');

let kattintasSzamlalo = 0;

gomb.addEventListener('click', function() {
    kattintasSzamlalo++;
    szöveg.textContent = "Kapsz " + kattintasSzamlalo + " libacombot!";
});
