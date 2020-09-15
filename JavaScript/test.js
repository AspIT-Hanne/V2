var assocArray = 
{
    "firstname": "John",
    "lastname": "Doe",
    "address": "Fosse Way 1",
    "city": "London",
    "phone": "4532 2341 7392"
};

console.log(assocArray);

// Print keys from Associative array in console
console.log(Object.keys(assocArray));

for(var index in assocArray)
{
    // Første gang lægges "Firstname" over i index variablen
    console.log(assocArray[index]);
}

for(var keys in assocArray)
{
    console.log(keys + ": " + assocArray[keys]);
}