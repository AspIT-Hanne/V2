var menupunkt1 = document.querySelector('#tab1');
var menupunkt2 = document.querySelector('#tab2');
var menupunkt3 = document.querySelector('#tab3');
var content1 = document.querySelector('#con1');
var content2 = document.querySelector('#con2');
var content3 = document.querySelector('#con3');

if (document.cookie == '')
{
    document.cookie = 'opentab=1';
}

if (document.cookie == 'opentab=2')
{
    menupunkt2.className = 'active';
    content2.className = 'show';
    menupunkt1.classList.remove('active');
    content1.classList.remove('show');
}
else if (document.cookie == 'opentab=3')
{
    menupunkt3.className = 'active';
    content3.className = 'show';
    menupunkt1.classList.remove('active');
    content1.classList.remove('show');
}
else
{
    menupunkt1.className = 'active';
    content1.className = 'show';
}

menupunkt1.addEventListener('click', function() {
    menupunkt1.className = 'active';
    content1.className = 'show';
    document.cookie = 'opentab=1';

    if (menupunkt2.classList.contains('active'))
    {
        menupunkt2.classList.remove('active');
        content2.classList.remove('show');
    }
    else
    {
        menupunkt3.classList.remove('active');
        content3.classList.remove('show');
    }
})

menupunkt2.addEventListener('click', function() {
    menupunkt2.className = 'active';
    content2.className = 'show';
    document.cookie = 'opentab=2';

    if (menupunkt3.classList.contains('active'))
    {
        menupunkt3.classList.remove('active');
        content3.classList.remove('show');
    }
    else
    {
        menupunkt1.classList.remove('active');
        content1.classList.remove('show');
    }
})

menupunkt3.addEventListener('click', function() {
    menupunkt3.className = 'active';
    content3.className = 'show';
    document.cookie = 'opentab=3';

    if (menupunkt1.classList.contains('active'))
    {
        menupunkt1.classList.remove('active');
        content1.classList.remove('show');
    }
    else
    {
        menupunkt2.classList.remove('active');
        content2.classList.remove('show');
    }
})
