var button = document.querySelector('#menu-icon');
var submenu = document.querySelector('#showsubmenu');


// Hamburger menu JavaScript

button.addEventListener('click', function()
    {
        var menu = document.querySelector('#menu');


        if(menu.classList.contains('show'))
        {
            menu.classList.remove('show');
            button.classList.remove('close');
            if (submenu.classList.contains('open'))
            {
                submenu.classList.remove('open');
            }
        }
        else
        {
            menu.classList.add('show');
            button.classList.add('close');
        }
    }
);

// Submenu JavaScript
console.log(window.innerWidth);
if (window.innerWidth < 800)
{
    submenu.classList.add('mobile');
    submenu.addEventListener('click', function()
        {
            if (submenu.classList.contains('open'))
            {
                submenu.classList.remove('open');
            }
            else
            {
                submenu.classList.add('open');
            }
        }
    );
}
else
/*{
    submenu.classList.add('desktop');
    submenu.addEventListener('mouseover', function()
        {
            if (submenu.classList.contains('open'))
            {
                submenu.classList.remove('open');
            }
            else
            {
                submenu.classList.add('open');
            }
        }
    );
}*/

