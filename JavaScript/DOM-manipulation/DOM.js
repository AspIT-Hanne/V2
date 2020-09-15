var images = document.querySelectorAll('img');

var src1 = images[0].src;
var src2 = images[1].src;

console.log(images);

images.forEach(element => 
{
    element.setAttribute("alt", "Billedet er underlagt copyright");
    console.log(element.src);
});


var headlines = document.querySelectorAll('h1');

headlines.forEach(element =>
{
    element.classList.add('title');
});

var playground = document.querySelector('#playground');

// console.log(playground);

var myUl = document.createElement('ul');
var myLi1 = document.createElement('li');
var myLi2 = document.createElement('li');
var myLi3 = document.createElement('li');
myUl.appendChild(myLi1);
myUl.appendChild(myLi2);
myUl.appendChild(myLi3);
playground.appendChild(myUl);

var myLiText1 = document.createTextNode("Element 1");
var myLiText2 = document.createTextNode("Element 2");
var myLiText3 = document.createTextNode("Element 3");

myLi1.appendChild(myLiText1);
myLi2.appendChild(myLiText2);
myLi3.appendChild(myLiText3);