var menuid = document.querySelector("#menu");
console.log(menuid);

var activeclass = document.querySelector(".active");
console.log(activeclass);

var headerone = document.querySelectorAll("h1");
console.log(headerone);

var afsnit = document.querySelectorAll("p");
console.log(afsnit);

var images = document.querySelectorAll("img");

for (i = 0; i < images.length; i++)
{
    images[i].setAttribute("alt", "Billedet er underlagt copyright");
}

var onlyheaderone = document.querySelector("h1");
onlyheaderone.innerHTML = "Overskriften er udskiftet";

for (i = 0; i < headerone.length; i++)
{
    headerone[i].setAttribute("class", "title");
}

var listitem = document.querySelectorAll("li");
console.log(listitem);

var playgroundid = document.querySelector("#playground");
var nyUnorderedList = document.createElement("ul");

playgroundid.appendChild(nyUnorderedList);

var j = 1;
while (j < 4)
{
    var nytListItem = document.createElement("li");
    var nytListItemTekst = document.createTextNode("Noget spændende " + j);
    nytListItem.appendChild(nytListItemTekst);
    nyUnorderedList.appendChild(nytListItem);
    j++;
}

var deleteme1 = document.querySelector("#deleteme");
deleteme1.parentNode.removeChild(deleteme1);

var deleteme2 = document.querySelector("#deletemetoo");
deleteme2.remove();