"use strict";

let rootElement = document.querySelector(":root");
let imagearea = document.querySelector(".sidebar");
let images = imagearea.querySelectorAll("img");
let imagetxt = document.querySelector(".imgtext");
let i = 0;

// Set height of div-area containing sidebar slideshow to the actual height of the images
console.log(images[0].height);
let actualHeight = images[0].height;
rootElement.style.setProperty('--sideshowheight', actualHeight+"px");

setTimeout(showloop, 3000);

function showloop()
{
    i++;
    if (i == images.length)
    {
        i = 0;
        images[images.length-1].classList.toggle("show");
    }
    else
    {
        images[i-1].classList.toggle("show");
    }
    images[i].classList.toggle("show");
    imagetxt.innerHTML = images[i].alt;

    setTimeout(showloop, 3000);
}