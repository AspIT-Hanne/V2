// Associative array med navnet på menupunktet og url'en til menupunktet
var menu = {
    home: 'home.html',
    products: 'products.html',
    pricing: 'pricing.html',
    vision: 'vision.html',
    about: 'about.html',
    contact: 'contact.html'
};

var body = document.querySelector('body'); // Hent body-tagget fra den allerede eksisterende HTML-kode
var nyNav = document.createElement('nav'); // Opret et nav-element og læg det i variablen nyNav
nyNav.classList.add("menu");
var nyUL = document.createElement('ul'); // Opret et ul-element og læg det i variablen nyUL

body.appendChild(nyNav); // Indsæt nav-elementet i DOM'en lige under body-elementet, som jeg hentede i linje 11
nyNav.appendChild(nyUL); // Indsæt ul-elementet i DOM'en lige under nav-elementet, som jeg indsatte i linje 15

for (index in menu) // Gennemløb arrayet med menu-punkter og læg index-navnet i variablen index
{
    var nyLI = document.createElement('li'); // Opret et nyt li-element og læg det i variablen nyLI
    var nyA = document.createElement('a'); // Opret et nyt a-element og læg det i variablen nyA
    var nyATekst = document.createTextNode(index); // Opret tekstindholdet til linket (den tekst, der står imellem start og slut a-tag) og læg det i variablen nyATekst
    nyA.href = menu[index]; // Alle attributter på et item kan tilgås med element.attribut syntax. Hvis attributten ikke eksisterer bliver den oprettet
    // nyA.setAttribute("href", menu[index]); -- Alternativ måde at sætte en attribut på
    nyA.appendChild(nyATekst); // Indsæt tekstnoden (tekstindholdet til a-tagget) på det a-element, jeg oprettede på linje 21
    nyLI.appendChild(nyA); // Indsæt det oprettede a-element under det li-element, jeg oprettede på linje 20
    nyUL.appendChild(nyLI); // Indsæt det oprettede li-element under det ul-element, jeg oprettede på linje 13
}


