var slideshow = document.querySelector(".slideshow"); // Hent articlen som indeholder slideshowet
var slides = slideshow.querySelectorAll("img"); // Hent alle billeder som er på siden (det kunne også være i slideshow-articlen)
var dots = document.querySelector(".dotArea"); // Hent det område, som dots'ene skal være i
var i = 0; // Start tæller

console.log(slides[0])

// Løkke til at oprette det samme antal dots, som jeg har billeder
for (var j = 0; j < slides.length; j++) // For alle de billeder, som ligger på HTML siden
{
    var newDot = document.createElement("div"); // Opret en nyt div, som skal blive til en dot
    newDot.classList.add("dot"); // Giv den klassen dot
    dots.appendChild(newDot); // Tilføj den til dot-området
}

var allDots = document.querySelectorAll(".dot"); // Hent alle de dots, som er blevet oprettet

allDots[0].classList.add("active"); // Sæt den første dot til aktiv

setInterval(slideshowSlider, 5000); // Kald funktionen slideshowSlider med 5000 milisekunders mellemrum

function slideshowSlider()
{
    if (i == slides.length - 1) // Hvis tælleren er nået til antal billeder
    {
        i = 0; // Nulstil tæller
    }
    else
    {
        i++; // Ellers tæl tæller en op
    }

    slides[i].classList.add("currentImg"); // Sæt klassen currentImg på det aktuelle billede (sætter opacity til 1)
    allDots[i].classList.add("active"); // Sæt klassen active på den aktuelle dot (sætter farven lidt mørkere)

    if (i == 0)
    {
        slides[slides.length - 1].classList.remove("currentImg"); // Hvis tælleren er 0, skal currentImg fjernes fra det sidste billede (det som var currentImg lige før)
        allDots[slides.length - 1].classList.remove("active"); // Hvis tælleren er 0, skal active fjernes fra den sidste dot (som var active lige før)
    }
    else
    {
        slides[i-1].classList.remove("currentImg"); // Fjern currentImg fra det forrige billede, som var currentImg lige før
        allDots[i-1].classList.remove("active"); // Fjern active fra den forrige dot, som var active lige før
    }

    
}