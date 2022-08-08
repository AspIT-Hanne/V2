var bank = "jb"; // Vælg hvilken bank brevet skal være fra. Valgmuligheder er jb for Jyske Bank, nb for Nordea Bank og db for Danske Bank

// Tre associative arrays med bank-informationer, som kan skiftes ud i brevet
var jyskeBank = {firmanavn: "Jyske Bank", firmaadresse: "Skattelyvej 1", firmapost: "2222", firmaby: "Solsiden", firmatlf: "+45 1234 1234", firmamail: "kontakt@jyskebank.nu", firmalogo: "logo_jb.png"};
var danskeBank = {firmanavn: "Danske Bank", firmaadresse: "Mangepengevej 5", firmapost: "3333", firmaby: "Storby", firmatlf: "+45 3333 5566", firmamail: "kontakt@danskebank.nu", firmalogo: "logo_db.png"};
var nordeaBank = {firmanavn: "Nordea Bank", firmaadresse: "Bankvej 34", firmapost: "4444", firmaby: "Lilleby", firmatlf: "+45 1234 5678", firmamail: "kontakt@nordea.nu", firmalogo: "logo_nd.png"};

// Associative array med kundeinformationer (til fremtidig brug)
var kunde = {kundefornavn: "Anders", kundeefternavn: "And", kundeadresse: "Paradisæblevej 111", kundepostby: "1000 Andeby"};

// Hent HTML-elementer med klasserne firmanavn, firmaadresse, firmapost, firmaby, firmatlf, firmamail og firmalogo
var firmanavn = document.querySelectorAll('.firmanavn');
console.log(firmanavn); // Udskriv alle de hentede elementer, som har klassen "firmanavn"
var firmaadresse = document.querySelectorAll('.firmaadresse');
var firmapost = document.querySelectorAll('.firmapost');
var firmaby = document.querySelectorAll('.firmaby');
var firmatlf = document.querySelectorAll('.firmatlf');
var firmamail = document.querySelectorAll('.firmamail');
var firmalogo = document.querySelectorAll('.firmalogo');
console.log(firmalogo);

// På hver af de nodelists (arrays), som bliver dannet med de forskellige elementer fra forskellige klasser, skal køres den tilsvarende callback funktion (en callback-function er en funktion, der bliver sendt som argument for en anden funktion/metode)
firmanavn.forEach(udskiftFirmaNavn); // For hvert element i klassen firmanavn, skal køres callback funktionen udskiftFirmanavn. Det aktuelle HTML-element bliver overført til callback-funktionen som argument (så hvis første element, som har klassen firmanavn er et p-element, så bliver det overført til callback-funktionen)
firmaadresse.forEach(udskiftFirmaAdresse);
firmapost.forEach(udskiftFirmaPost);
firmaby.forEach(udskiftFirmaBy);
firmatlf.forEach(udskiftFirmaTlf);
firmamail.forEach(udskiftFirmaMail);
firmalogo.forEach(udskiftFirmaLogo);

// callback-funktionen udskiftFirmaNavn, som modtager det aktuelle HTML-element som argument og herefter ændrer innerHTML (som er teksten mellem start og slut-tag) til teksten fra det relevante associative array på index firmanavn
function udskiftFirmaNavn(element)
{
    if(bank == "jb")
    {
        element.innerHTML = jyskeBank.firmanavn;
    }
    else if(bank == "db")
    {
        element.innerHTML = danskeBank.firmanavn;
    }
    else if(bank == "nb")
    {
        element.innerHTML = nordeaBank.firmanavn;
    }   
}

function udskiftFirmaAdresse(element)
{
    if(bank == "jb")
    {
        element.innerHTML = jyskeBank.firmaadresse;
    }
    else if(bank == "db")
    {
        element.innerHTML = danskeBank.firmaadresse;
    }
    else if(bank == "nb")
    {
        element.innerHTML = nordeaBank.firmaadresse;
    }  
}

function udskiftFirmaPost(element)
{
    if(bank == "jb")
    {
        element.innerHTML = jyskeBank.firmapost;
    }
    else if(bank == "db")
    {
        element.innerHTML = danskeBank.firmapost;
    }
    else if(bank == "nb")
    {
        element.innerHTML = nordeaBank.firmapost;
    }  
}

function udskiftFirmaBy(element)
{
    if(bank == "jb")
    {
        element.innerHTML = jyskeBank.firmaby;
    }
    else if(bank == "db")
    {
        element.innerHTML = danskeBank.firmaby;
    }
    else if(bank == "nb")
    {
        element.innerHTML = nordeaBank.firmaby;
    }  
}

function udskiftFirmaTlf(element)
{
    if(bank == "jb")
    {
        element.innerHTML = jyskeBank.firmatlf;
    }
    else if(bank == "db")
    {
        element.innerHTML = danskeBank.firmatlf;
    }
    else if(bank == "nb")
    {
        element.innerHTML = nordeaBank.firmatlf;
    }  
}

function udskiftFirmaMail(element)
{
    if(bank == "jb")
    {
        element.innerHTML = jyskeBank.firmamail;
    }
    else if(bank == "db")
    {
        element.innerHTML = danskeBank.firmamail;
    }
    else if(bank == "nb")
    {
        element.innerHTML = nordeaBank.firmamail;
    }  
}

// Funktionen udskiftFirmaLogo ændrer ikke i innerHTML som de øvrige callback-funktioner. Den ændrer i de to attributter src og alt, så der bliver vist det korrekte billede og alt-tekst afhængigt af, hvilken bank, der er valgt i linje 1
function udskiftFirmaLogo(element)
{
    if(bank == "jb")
    {
        element.setAttribute("src", jyskeBank.firmalogo);
        element.setAttribute("alt", "Jyske Bank logo");
    }
    else if(bank == "db")
    {
        element.setAttribute("src", danskeBank.firmalogo);
        element.setAttribute("alt", "Danske Bank logo");
    }
    else if(bank == "nb")
    {
        element.setAttribute("src", nordeaBank.firmalogo);
        element.setAttribute("alt", "Nordea Bank logo");
    }  
    
}