var galleri = document.querySelector(".gallery"); // Hent elementet med klassen "gallery"

// const fs = require('fs');
//     const dir = './img';

//     fs.readdir(dir, (err, files) => {
//     console.log(files.length);
//     });

galleri.addEventListener("click", function(e) // Tilføj en eventListener på ".gallery" elementet
{    
    console.log(e.target); // Udskriv klikeventet i konsollen for at se, hvilke properties man kan arbejde med

    if(e.target.tagName == "IMG") // Hvis brugeren har klikket på et element med tagget "IMG"
    {
        var newSrc = e.target.src.split("_"); // Tag src-atributten fra det element, der er klikket på (billedets sti/navn) og split det ved _ tegnet. Herefter lægges det over i variablet newSrc som et array, hvor fx thumb placeres på index 0 og abril.jpg placeres på index 1
        var overlay = document.createElement("div"); // Opret et nyt div-element, som skal bruges som overlay
        overlay.classList.add("overlay"); // Tilføj klassen .overlay på det nye div-element
        document.body.appendChild(overlay); // Sæt det nye div-element ind i din HTML-kode ved at tilføje det under body-elementet

        var newImage = document.createElement("img"); // Opret et nyt img-element
        newImage.setAttribute("src", "img/" + newSrc[1]); // Giv det nye img-element en src-attribut, som du tager fra array'et, hvor du splittede navnet fra den thumbnail, der blev klikket på (se linje 9)

        overlay.appendChild(newImage); // Tilføj det nye img-element til det div-element, som blev oprettet i linje 10

        overlay.addEventListener("click", function() // Tilføj en eventListener til det nye div-element for at holde øje med, om brugeren klikker på overlayet
        {
            if (overlay) // Hvis overlay variablen eksisterer og indeholder noget (der er lavet et overlay)
            {
                overlay.remove(); // Fjern overlayet igen/slet det div-element, som blev oprettet i linje 10
                // overlay.parentNode.removeChild(overlay); - gammel metode, som man er sikker på virker i alle browsere
            }

        });

    }
})