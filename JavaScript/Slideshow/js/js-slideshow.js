var slideshow = document.querySelectorAll('.slide');
var dotArea = document.querySelector('#dots');
var i = 0;

for (var j = 0; j < slideshow.length -1; j++)
{
    var newDot = document.createElement('span');
    newDot.classList.add('dot');
    dotArea.appendChild(newDot);
}

var dots = document.querySelectorAll('.dot');

var interval = setInterval(slideshowSlider, 3000);

function slideshowSlider()
{
    if (i == slideshow.length - 1)
    {
        i = 0;
    }
    else
    {
        i++;
    }
    
    console.log(i);
    slideshow[i].classList.add('currentimg');
    dots[i].classList.add('active');

    if (i == 0)
    {
        slideshow[slideshow.length - 1].classList.replace('currentimg', 'previousimg');
        slideshow[slideshow.length - 2].classList.remove('previousimg');
        dots[slideshow.length - 1].classList.remove('active');
    }
    else
    {
        slideshow[i-1].classList.replace('currentimg', 'previousimg');
        dots[i - 1].classList.remove('active');
        if (i == 1)
        {
            slideshow[slideshow.length - 1].classList.remove('previousimg');
        }
        else
        {
            slideshow[i - 2].classList.remove('previousimg');
        }
    }
}

// Manuelt slideshow

var LeftArrow = document.querySelector(".left");
var RightArrow = document.querySelector(".right");

RightArrow.addEventListener("click", function(e)
    {
        clearInterval(interval);
        
        slideshowSlider();
    }
);

LeftArrow.addEventListener("click", function(e)
    {
        clearInterval(interval);

        if (i == 0)
        {
            i = slideshow.length - 1;
        }
        else
        {
            i--;
        }

        console.log(i);

        if (slideshow[i].classList.contains('previousimg'))
        {
            slideshow[i].classList.replace('previousimg', 'currentimg');
        }
        else
        {
            slideshow[i].classList.add('currentimg');
        }
        
        dots[i].classList.add('active');

        if (i == slideshow.length -1)
        {
            dots[0].classList.remove('active');
            slideshow[0].classList.remove('currentimg');
        }
        else
        {
            dots[i+1].classList.remove('active');
            slideshow[i+1].classList.remove('currentimg');
        }

        if (i == 0)
        {
            slideshow[slideshow.length -1].classList.add('previousimg');
        }
        else
        {
            slideshow[i-1].classList.add('previousimg');
        }
    }
);
