"use strict";

let gallery = document.querySelector(".gallery");

gallery.addEventListener("click", function(e)
{
    console.dir(e);

    if(e.target.nodeName == "IMG")
    {
        let div = document.createElement("div");
        div.id = "overlay";
        div.classList.add("overlay");
        document.body.appendChild(div);
    
        let newImage = document.createElement("img");
        newImage.id = "largeImage";
        let newSrc = e.target.src.split("_");
    
        console.log(newSrc);
    
        newImage.setAttribute("src", "img/" + newSrc[1] );
    
        div.appendChild(newImage);

        div.addEventListener("click", function()
        {
            div.remove();
        });
    }

    
});