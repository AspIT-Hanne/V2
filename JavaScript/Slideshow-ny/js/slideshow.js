"use strict";

let imagearea = document.querySelector(".slideshow");
let dotarea = document.querySelector(".dotarea");
let images = imagearea.querySelectorAll("img");
let i = 0;

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