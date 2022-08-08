"use strict";

/* Slideshow */

let imagearea = document.querySelector(".slideshow");
let dotarea = document.querySelector(".dotarea");
let images = imagearea.querySelectorAll("img");
let i = 0;

if(window.innerWidth>500)
{
    for (let i = 0; i < images.length; i++) {
        let newSpan = document.createElement("span");
        newSpan.classList.add("dot");
        dotarea.appendChild(newSpan);    
    }

    let dots = document.querySelectorAll(".dot");
    console.log(dots);
    dots[0].classList.add("active");

    setTimeout(showloop, 3000);

    function showloop()
    {
        i++;
        if (i == images.length)
        {
            i = 0;
            images[images.length-1].classList.toggle("show");
            dots[images.length-1].classList.toggle("active");
        }
        else
        {
            images[i-1].classList.toggle("show");
            dots[i-1].classList.toggle("active");
        }
        images[i].classList.toggle("show");
        dots[i].classList.toggle("active");
        
        console.log(i);
        setTimeout(showloop, 3000);
    }
}

/* Gallery */

let gallery = document.querySelector(".gallery");

if(window.innerWidth>500)
{
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
}

