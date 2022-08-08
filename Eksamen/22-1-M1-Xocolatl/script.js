"use strict";

// ---------------- BOTTOM SLIDER --------------------------- //

let slidercounter = 0;
let bottomslider = document.querySelector(".slideshow");
let sliderimages = bottomslider.querySelectorAll("img");
let sliderclasses = ["image0", "image1", "image2", "image3"];

setTimeout(slider, 2000);

function slider()
{
    
    
    toggleclasses();

    if(slidercounter == sliderimages.length -1)
    {
        slidercounter = 0;
    }
    else
    {
        slidercounter++;
    }

    setTimeout(slider, 2000);
}

function toggleclasses()
{
    var counter = slidercounter;
    for ( let i = 0; i < sliderimages.length ; i++)
    {
        let temp = (counter + i) % 4;
        let tempclass = "image" + temp;

        sliderimages[i].className = tempclass;
    }
}

// ---------------- CREATE H1 OVERLAY ON BANNER IMAGES --------------------------- //

let bannerbody = document.querySelector(".bannerheading");

if(bannerbody)
{
    let heading = bannerbody.querySelector("h1");
    let headingplace = bannerbody.querySelector("#headingplace");

    headingplace.innerHTML = heading.innerHTML;
}


// ---------------- BANNER SLIDESHOW --------------------------- //

let bannerarea = document.querySelector(".banner");

if(bannerarea)
{
    let bannerimages = bannerarea.querySelectorAll("img");

    if(window.innerWidth > 500)
    {
        
        let dotarea = document.querySelector("#dotarea");
        let counter = 0;

        for (let i = 0; i < bannerimages.length; i++) {
            let newSpan = document.createElement("span");
            newSpan.classList.add("dot");
            dotarea.appendChild(newSpan);    
        }
        
        let dots = document.querySelectorAll(".dot");
        
        for(let i = 0; i < bannerimages.length -1; i++)
        {
            bannerimages[i].className = "";
        }

        dots[3].classList.add("activedot");
        bannerimages[3].className = "active";
    
        setTimeout(bannerslide, 3000);
    
        function bannerslide()
        {
            bannerimages[counter].classList.toggle("active");
            dots[counter].classList.toggle("activedot");
            if(counter == 0)
            {
                bannerimages[bannerimages.length - 1].classList.toggle("active");
                dots[bannerimages.length - 1].classList.toggle("activedot");
            }
            else
            {
                bannerimages[counter-1].classList.toggle("active");
                dots[counter-1].classList.toggle("activedot");
            }
    
            if(counter == bannerimages.length - 1)
            {
                counter = 0;
            }
            else
            {
                counter++;
            }
    
            setTimeout(bannerslide, 3000);
        }
    }
    else
    {
        bannerimages[0].className = "active";
    }
}


// ---------------- BLOGPOST IMAGE LIGHTBOX --------------------------- //

let blogarticle = document.querySelector(".blog");

if(blogarticle)
{
    blogarticle.addEventListener("click", function(event) 
    {
        if(event.target.tagName === "IMG")
        {
            if(event.target.src.split("_")[1] == "large.jpg")
            {
                let overlay = document.querySelector(".overlay");
                if(overlay)
                {
                    overlay.remove();
                }
            }
            else
            {
                let splitsource = event.target.src.split("/");
                let filename = splitsource[splitsource.length - 1];
                let source = filename.split(".")[0];
                console.log(source + "_large.jpg");
        
                let newdiv = document.createElement("div");
                newdiv.classList.add("overlay");
                
                let newimg = document.createElement("img");
                newimg.src = "img/" + source + "_large.jpg";
        
                newdiv.appendChild(newimg);
                blogarticle.appendChild(newdiv);
            
                newdiv.addEventListener("click", function()
                {
                    newdiv.remove();
                });
            }
    
            
        }
    
    });
}

