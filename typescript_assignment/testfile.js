var m = 'hello';
//console.log(m);
var character = new Array();
character.push("Rohit");
character.push("Kiran");
character.push("Rishi");
character.push("Subhash");
character.forEach(function (x) {
    console.log(x);
});
var characterToUpper = character.map(function (v, i) {
    return v.toUpperCase();
});
console.log(characterToUpper);
var filteredCharecters = character.filter(function (v, i) {
    return v.length > 5;
});
console.log(filteredCharecters);
