class MyClass{
private str:string;

constructor(s:string){
    this.str=s;
}

changeCase(c:string): string {
if(c==="U"||c==="u" ) return this.str.toUpperCase();
if(c==="L"||c==="l" ) return this.str.toLowerCase();

return this.str;
}
}

let obj=new  MyClass("Rohit Khalde");

let value=obj.changeCase("U");
console.log(value);


