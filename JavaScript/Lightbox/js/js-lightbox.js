// Image lightbox JavaScript
var galleri = document.querySelector('#gallery');


galleri.addEventListener('click', function(e)
    {
        console.log(e);
        console.log(e.target);
        console.log(e.target.tagName);
        console.log(e.target.nodeName);
        if (e.target.tagName === "IMG")
        {
            var newSrc = e.target.src.split('_');
            var overlay = document.createElement('div');
            // overlay.id = 'overlay';
            overlay.className='overlay';
            document.body.appendChild(overlay);

            var largeImage = document.createElement('img'); 
            largeImage.id = 'largeImage';
            largeImage.setAttribute('src', "img/" + newSrc[1]);
            overlay.appendChild(largeImage);

            overlay.addEventListener('click', function()
                {
                    if (overlay)
                    {
                        overlay.remove();
                    }
                }
            );
        }
    }, false
);