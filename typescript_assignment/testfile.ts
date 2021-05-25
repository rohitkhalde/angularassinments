let m='hello';

//console.log(m);

let character=new Array<string>();

character.push("Rohit");
character.push("Kiran");
character.push("Rishi");
character.push("Subhash");

character.forEach(x=>{
console.log(x);
});

let characterToUpper=character.map((v,i)=>{

    return v.toUpperCase();
});

console.log(characterToUpper);

let filteredCharecters=character.filter((v,i)=>{

    return v.length>5;
});

console.log(filteredCharecters);

// scope defination of the variable inside the block using let
//preferred over 'var' of javascript