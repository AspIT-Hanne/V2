var menuicon = document.querySelector("#menu-icon");
var navul = document.querySelector("#navigation");

menuicon.addEventListener("click", function(e)
{

    navul.classList.toggle("open");
    menuicon.classList.toggle("close-icon");
    // if(navul.classList.contains("open"))
    // {
    //     navul.classList.remove("open");
    //     menuicon.classList.remove("close-icon");
    // }
    // else
    // {
    //     navul.classList.add("open");
    //     menuicon.classList.add("close-icon");
    // }    
});