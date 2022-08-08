var button = document.querySelector('#menu-icon');
var testbutton = document.querySelector('#testknap');

testbutton.addEventListener('click', function(e)
    {
        console.log(e);
    }
);
























// Hamburger menu JavaScript

button.addEventListener('click', function()
    {
        var menu = document.querySelector('#menu');


        if(menu.classList.contains('show'))
        {
            menu.classList.remove('show');
            button.classList.remove('close');
        }
        else
        {
            menu.classList.add('show');
            button.classList.add('close');
        }
    }
);

// Submenu JavaScript
// console.log(window.innerWidth);
// if (window.innerWidth < 800)
// {
//     submenu.classList.add('mobile');
//     submenu.addEventListener('click', function()
//         {
//             if (submenu.classList.contains('open'))
//             {
//                 submenu.classList.remove('open');
//             }
//             else
//             {
//                 submenu.classList.add('open');
//             }
//         }
//     );
// }
// else
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

