var slideshow = document.querySelector(".slideshow");
var slides = slideshow.querySelectorAll("img");
var dots = document.querySelector(".dotArea");
var i = 0;

for (var j = 0; j < slides.length; j++)
{
    var newDot = document.createElement("div");
    newDot.classList.add("dot");
    dots.appendChild(newDot);
}

var allDots = document.querySelectorAll(".dot");

allDots[0].classList.add("active");

setInterval(slideshowSlider, 5000);

function slideshowSlider()
{
    if (i == slides.length - 1)
    {
        i = 0;
    }
    else
    {
        i++;
    }

    slides[i].classList.add("currentImg");
    allDots[i].classList.add("active");

    if (i == 0)
    {
        slides[slides.length - 1].classList.replace("currentImg", "previousImg");
        allDots[slides.length - 1].classList.remove("active");

        slides[i+1].classList.remove("previousImg");
    }
    else
    {
        slides[i-1].classList.replace("currentImg", "previousImg");
        allDots[i-1].classList.remove("active");

        if (i == slides.length - 1)
        {
            slides[0].classList.remove("previousImg");
        }
        else
        {
            slides[i+1].classList.remove("previousImg");
        }
    }

    
}