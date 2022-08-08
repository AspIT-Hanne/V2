console.log(window.innerWidth);

if(window.innerWidth > 999)
{
    let galleri = document.querySelector(".madgalleri"); // Hent elementet med klassen "gallery"

    if(galleri)
    {
        galleri.addEventListener("click", function(e) // Tilføj en eventListener på ".gallery" elementet
        {    
            console.log(e.target); // Udskriv klikeventet i konsollen for at se, hvilke properties man kan arbejde med
        
            if(e.target.tagName == "IMG") // Hvis brugeren har klikket på et element med tagget "IMG"
            {
                let tempSrc = e.target.src.split("/"); // Tag src-atributten fra det element, der er klikket på (billedets sti/navn) og split det ved _ tegnet. Herefter lægges det over i variablet newSrc som et array, hvor fx thumb placeres på index 0 og abril.jpg placeres på index 1
        
                let newSrc = tempSrc[tempSrc.length - 1].split(".")[0] + "_lg.jpg";
        
                var overlay = document.createElement("div"); // Opret et nyt div-element, som skal bruges som overlay
                overlay.classList.add("overlay"); // Tilføj klassen .overlay på det nye div-element
                document.body.appendChild(overlay); // Sæt det nye div-element ind i din HTML-kode ved at tilføje det under body-elementet
        
                let imgDiv = document.createElement("div");
                overlay.appendChild(imgDiv);
        
                var newImage = document.createElement("img"); // Opret et nyt img-element
                newImage.setAttribute("src", "img/" + newSrc); // Giv det nye img-element en src-attribut, som du tager fra array'et, hvor du splittede navnet fra den thumbnail, der blev klikket på (se linje 9)
        
                imgDiv.appendChild(newImage); // Tilføj det nye img-element til det div-element, som blev oprettet i linje 10
        
                let txtDiv = document.createElement("div");
                txtDiv.className = "lightboxtxt";
                let txtheader = document.createElement("h4");
                let txtp = document.createElement("p");
                let txth4 = document.createElement("h4");
                let header = document.createTextNode(e.target.nextElementSibling.innerHTML);
                let txt = document.createTextNode(e.target.nextElementSibling.nextElementSibling.innerHTML);
                let price = document.createTextNode(e.target.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML);
                txtheader.appendChild(header);
                txtp.appendChild(txt);
                txth4.appendChild(price);
        
                txtDiv.appendChild(txtheader);
                txtDiv.appendChild(txtp);
                txtDiv.appendChild(txth4);
        
                overlay.appendChild(txtDiv);
        
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
    }
    
    
    let opskrifter = document.querySelector(".opskrifter");
    
    if(opskrifter)
    {
        opskrifter.addEventListener("click", function(e) // Tilføj en eventListener på ".gallery" elementet
        {    
            console.log(e.target); // Udskriv klikeventet i konsollen for at se, hvilke properties man kan arbejde med
        
            if(e.target.tagName == "IMG") // Hvis brugeren har klikket på et element med tagget "IMG"
            {
                let tempSrc = e.target.src.split("/"); // Tag src-atributten fra det element, der er klikket på (billedets sti/navn) og split det ved _ tegnet. Herefter lægges det over i variablet newSrc som et array, hvor fx thumb placeres på index 0 og abril.jpg placeres på index 1
        
                let newSrc = tempSrc[tempSrc.length - 1].split(".")[0] + "_lg.jpg";
        
                var overlay = document.createElement("div"); // Opret et nyt div-element, som skal bruges som overlay
                overlay.classList.add("overlay"); // Tilføj klassen .overlay på det nye div-element
                document.body.appendChild(overlay); // Sæt det nye div-element ind i din HTML-kode ved at tilføje det under body-elementet
        
                let imgDiv = document.createElement("div");
                overlay.appendChild(imgDiv);
        
                var newImage = document.createElement("img"); // Opret et nyt img-element
                newImage.setAttribute("src", "img/" + newSrc); // Giv det nye img-element en src-attribut, som du tager fra array'et, hvor du splittede navnet fra den thumbnail, der blev klikket på (se linje 9)
        
                imgDiv.appendChild(newImage); // Tilføj det nye img-element til det div-element, som blev oprettet i linje 10
        
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
    }
    
    let frugtgalleri = document.querySelector(".fruit")
    
    if(frugtgalleri)
    {
        frugtgalleri.addEventListener("click", function(e) // Tilføj en eventListener på ".gallery" elementet
        {    
            console.log(e.target); // Udskriv klikeventet i konsollen for at se, hvilke properties man kan arbejde med
        
            if(e.target.tagName == "IMG") // Hvis brugeren har klikket på et element med tagget "IMG"
            {
                let tempSrc = e.target.src.split("/"); // Tag src-atributten fra det element, der er klikket på (billedets sti/navn) og split det ved _ tegnet. Herefter lægges det over i variablet newSrc som et array, hvor fx thumb placeres på index 0 og abril.jpg placeres på index 1
        
                let newSrc = tempSrc[tempSrc.length - 1].split(".")[0] + "_lg.jpg";
        
                var overlay = document.createElement("div"); // Opret et nyt div-element, som skal bruges som overlay
                overlay.classList.add("overlay"); // Tilføj klassen .overlay på det nye div-element
                document.body.appendChild(overlay); // Sæt det nye div-element ind i din HTML-kode ved at tilføje det under body-elementet
        
                let imgDiv = document.createElement("div");
                overlay.appendChild(imgDiv);
        
                var newImage = document.createElement("img"); // Opret et nyt img-element
                newImage.setAttribute("src", "img/" + newSrc); // Giv det nye img-element en src-attribut, som du tager fra array'et, hvor du splittede navnet fra den thumbnail, der blev klikket på (se linje 9)
        
                imgDiv.appendChild(newImage); // Tilføj det nye img-element til det div-element, som blev oprettet i linje 10
        
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
    }
    
}
