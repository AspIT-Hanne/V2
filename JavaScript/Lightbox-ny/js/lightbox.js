var galleri = document.querySelector(".gallery");

galleri.addEventListener("click", function(e)
{
    console.log(e);

    if(e.target.tagName == "IMG")
    {
        var newSrc = e.target.src.split("_");
        var overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);

        var newImage = document.createElement("img");
        newImage.setAttribute("src", "img/" + newSrc[1]);

        overlay.appendChild(newImage);

        overlay.addEventListener("click", function()
        {
            if (overlay)
            {
                overlay.remove();
            }

        });

    }
})