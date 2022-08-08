// Opgave 1: Udskriv Hello World i konsollen, når der klikkes på en knap

let HelloWorldform = document.querySelector('#HlWorld');
let HelloWorldbtn = HelloWorldform.querySelector('input');

HelloWorldbtn.addEventListener('click', function()
{
    console.log("Hello World!");
});

// Opgave 2: Når der klikkes på et list-item skal et popup vise indholdet af det item, der er klikket på

let ul = document.querySelector("#menu");

ul.addEventListener('click', function(e) {
    alert("Du klikkede på " + e.target.innerHTML);
});

// Opgave 3: Skift baggrundsfarve på div, når der klikkes på en knap

let colorbutton = document.querySelector('#clrbtn');
let firkant = document.querySelector('#square');

colorbutton.addEventListener('click', function() {
    if (firkant.className == "blue")
        firkant.className = "yellow";
    else
        firkant.className = "blue";
})

// Opgave 4: Skift baggrundsfarve på body ved klik på en knap

let greenbutton = document.querySelector('#greenbtn');
let yellowbutton = document.querySelector('#yellowbtn');
let redbutton = document.querySelector('#redbtn');
let bluebutton = document.querySelector('#bluebtn');

let myBody = document.querySelector('body');

greenbutton.addEventListener('click', function() {
    myBody.className = "greenbody";
})

yellowbutton.addEventListener('click', function() {
    myBody.className = "yellowbody";
})

redbutton.addEventListener('click', function() {
    myBody.className = "redbody";
})

bluebutton.addEventListener('click', function() {
    myBody.className = "bluebody";
})

// Opgave 5: Vis/skjul element med inline styles

let showhideinline = document.querySelector('#showhideinline');
let rektinline = document.querySelector('#rectinline');

showhideinline.addEventListener('click', function()
{
    if(rektinline.style.display == "none")
    {
        rektinline.style.display = "block";
    }
    else
    {
        rektinline.style.display = "none";
    }
});

// Opgave 6: Vis/skjul element med klasser (eksterne styles)

let showhidebutton = document.querySelector('#showhidebtn');
let rektangel = document.querySelector('#rect');

showhidebutton.addEventListener('click', function() {
    rektangel.classList.toggle('hide');
    rektangel.classList.toggle('show');
})