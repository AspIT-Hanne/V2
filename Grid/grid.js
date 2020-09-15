var x = document.querySelector("main");

console.dir(x);

var y = x.querySelectorAll("h3");

console.log(y);

for(i = 0; i < y.length; i++)
{
    console.log(y[i].innerHTML);
}

var array = { a:"hest", b:"hund", c:"kat" };

for(var key in array)
{
    console.log(array[key]);
}

console.log(array);





