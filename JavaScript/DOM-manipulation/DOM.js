// Hent elementet med id "menu" og udskriv den i konsollen

let menu = document.querySelector("#menu");

console.dir(menu);

// Hent og udskriv alle billeder

let images = document.querySelectorAll('img');

images.forEach(element => console.log(element));

// Hent og udskriv elementet med klassen "active"

let active = document.querySelector('.active');
console.log(active);

// Hent og udskriv alle H1-elementer

let headlines = document.querySelectorAll('h1');

headlines.forEach(element => console.log(element));

// Hent og udskriv alle p-elementer

let afsnit = document.querySelectorAll('p');

afsnit.forEach(element => console.log(element));

// Tilføj ny alt-tekst til alle billeder

images.forEach(element => element.setAttribute("alt", "Billedet er underlagt copyright"));

// Udskift teksten i den primære overskrift

let overskrift = document.querySelector('h1');

overskrift.innerHTML = "Overskriften er udskiftet";

// Tilføj klassen "title" til alle H1-elementer

headlines.forEach(element =>
{
    element.classList.add('title');
});

// Find og udskriv alle li-elementer

let listItems = document.querySelectorAll('li');

listItems.forEach(x => console.log(x));

// Find elementet med id#playground og tilføj en ul med tre li herunder

let playground = document.querySelector('#playground');
let newUl = document.createElement('ul');

for(let i = 0; i < 3; i++)
{
    let newLi = document.createElement('li');
    let newLiTxt = document.createTextNode("Element " + (i + 1));
    newLi.appendChild(newLiTxt);
    newUl.appendChild(newLi);
}

playground.appendChild(newUl);

// Find de to billeder og få dem til at bytte plads

let src1 = images[0].src;
let src2 = images[1].src;

images[0].src = src2;
images[1].src = src1;

// Slet elementerne med id#deleteme og #deletemetoo

let sletMig = document.querySelector("#deleteme");
sletMig.remove();

let sletOgsaaMig = document.querySelector("#deletemetoo");
sletOgsaaMig.parentNode.removeChild(sletOgsaaMig);