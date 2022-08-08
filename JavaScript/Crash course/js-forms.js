let message = ""; // Initialisering af variabel til at lægge besked/tekst til brugeren i

// Opgave 1: Indtast og udskriv fornavn og efternavn

let formular1 = document.querySelector("#udskrivnavn");
let submitknap1 = document.querySelector("#namesubmitbtn");

formular1.addEventListener('submit', vedKlik);

function vedKlik(e)
{
    let fornavn = formular1.firstname.value; // Hent værdien fra formularfeltet firstname og læg det over i variablen fornavn
    let efternavn = formular1.lastname.value; // Hent værdien fra formularfeltet lastname og læg det over i variablen efternavn
    message = "Du har indtastet: " + fornavn + ' ' + efternavn; // Lav den besked, som brugeren skal have
    printMessage(message); // Kald funktionen printMessage og overfør den besked/tekst, der skal udskrives til brugeren
    e.preventDefault(); // Undgå at formularen reloader/redirecter/submitter
    resetForms(1); // Tøm felterne i alle andre formularer end den aktive
}

// Opgave 2: Indtast to tal og udregn og udskriv summen af de to tal

let formular2 = document.querySelector("#addition");

formular2.addEventListener('submit', addition);

function addition(e)
{
    let sum = Number(formular2.firstnumber.value) + Number(formular2.secondnumber.value); // Number-metoden omdanner det indtastede (som altid er en streng) til et tal, så JavaScript kan regne med det. Resultatet lægges i variablen sum
    message = "Resultatet når de to indtastede tal lægges sammen er: " + sum;
    printMessage(message); // Kald funktionen printMessage og overfør den besked/tekst, der skal udskrives til brugeren
    e.preventDefault(); // Undgå at formularen reloader/redirecter/submitter
    resetForms(2); // Tøm felterne i alle andre formularer end den aktive
}

// Opgave 3: Indtast et beløb, tilføj moms og træk rabat fra. Udskriv resultatet

let formular3 = document.querySelector("#momsrabat");

formular3.addEventListener('submit', udregnMomsRabat);

function udregnMomsRabat(e)
{
    
    let moms = Number(formular3.beloeb.value) * 0.25; // Udregn moms - sørg for at konvertere string til number, da indtastningsfelter indeholder strings, og dem kan man ikke lave matematiske udregninger med
    let rabat = Number(formular3.beloeb.value) * 0.1; // Udregn rabat - se ovenfor i forhold til Number()
    let resultat = Number(formular3.beloeb.value) + moms - rabat; // Udregn resultatet af indtastet beløb + moms - rabat
    message = "Beløbet plus moms og minus rabat er: " + resultat;
    printMessage(message); // Kald funktionen printMessage og overfør den besked/tekst, der skal udskrives til brugeren
    e.preventDefault(); // Undgå at formularen reloader/redirecter/submitter
    resetForms(3); // Tøm felterne i alle andre formularer end den aktive
}

// Opgave 4: Indtast en mail-adresse. Kontroller om det er en gyldig mail-adresse og lav en alert, der fortæller, om den er gyldig eller ej

let formular4 = document.querySelector("#mailtest");

formular4.addEventListener('submit', mailtest);

function mailtest(e)
{
    resetForms(4); // Tøm felterne i alle andre formularer end den aktive
    printMessage(""); // Slet beskeden/teksten til brugeren i bunden
    // Disse to funktionskald er sat i starten af denne funktion, da det ser pænere ud, at formularfelterne er tomme, når popup-boksen dukker op

    let beforeat = formular4.mail.value.split("@"); // Opdel tekststrengen i et array, hvor pladserne er adskilt af @. Dvs. den substreng, som står før @ ,ligger på beforeat[0], og den substreng, som står efter @, ligger på beforeat[1]
    let mailstreng = formular4.mail.value; // Hent den indtastede værdi fra formularfeltet over i variablen mailstreng
    if (mailstreng.search("@") == -1) // search() returnerer den plads, som karakteren ligger på og -1, hvis den ikke finder karakteren i strengen
    {
        alert("Indtast venligst en gyldig email adresse");
    }
    else if (mailstreng.search(/\./) == -1) // Her anvendes RegEx (Regular Expression), da punktum i sig selv er en special-karakter, som anvendes til at lave RegEx med, så derfor skal den escapes \. og skrives i RegEx start og slut tegn /  / 
    {
        alert("Indtast venligst en gyldig email adresse");
    }
    else if (beforeat[0].length < 2) // Hvis der er indtastet mindre end to karakterer før @, er emailen nok ugyldig
    {
        alert("Indtast venligst en gyldig email adresse");
    }
    else
    {
        alert("Du har indtastet en gyldig email adresse");
    }
    
    e.preventDefault(); // Undgå at formularen reloader/redirecter/submitter
    
}

// Funktion til at udskrive besked nederst på siden. Beskeden fra hver formular overføres som argument
function printMessage(m)
{
    let oldelement = document.querySelector("#message"); // Hent den besked, der allerede står der fra sidst der blev trykket på submit
    if(oldelement)
    {
        oldelement.remove(); // Hvis der allerede er en besked, så slet den besked
    }

    let pelement = document.createElement('p'); // Opret et nyt p-element
    pelement.id = "message"; // Giv det nye p-element id'et "message"
    let bodyelement = document.querySelector('body'); // Hent body-elementet
    let ptext = document.createTextNode(m); // Opret den besked, der skal sættes ind i p-tags'ene
    
    pelement.appendChild(ptext); // Tilføj besked/tekst til p-tags

    bodyelement.appendChild(pelement); // Tilføj p-tags til body'en
}

// Min lidt klodsede funktion til at resette alle felter i de andre formularer end den aktuelle. Den kan garanteret laves mere elegant ved at bruge window["formular"+i] i en for-løkke?
function resetForms(formNo) // Til funktionen overføres nummeret på den aktuelle formular (1, 2, 3 eller 4)
{
    switch(formNo)
    {
        case 1: // Hvis det er formular 1 callback funktionen, der har kaldt denne funktion, skal alle felter i formular 2, 3 og 4 nulstilles
            formular2.reset();
            formular3.reset();
            formular4.reset();
            break; // Afslut switch-strukturen
        case 2: // Hvis det er formular 2 callback funktionen, der har kaldt denne funktion, skal alle felter i formular 1, 3 og 4 nulstilles
            formular1.reset();
            formular3.reset();
            formular4.reset();
            break; // Afslut switch-strukturen
        case 3: // Hvis det er formular 3 callback funktionen, der har kaldt denne funktion, skal alle felter i formular 1, 2 og 4 nulstilles
            formular1.reset();
            formular2.reset();
            formular4.reset();
            break; // Afslut switch-strukturen
        case 4: // Hvis det er formular 4 callback funktionen, der har kaldt denne funktion, skal alle felter i formular 1, 2 og 3 nulstilles
            formular1.reset();
            formular2.reset();
            formular3.reset();
            break; // Afslut switch-strukturen
    }
}



