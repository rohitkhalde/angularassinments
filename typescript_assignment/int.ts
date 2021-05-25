class Base{

    private v:string;

    constructor(v:string){
        this.v=v;

    }
    display():void{
        console.log(`v=${this.v}`);
        
    }

    protected printData():void{
        console.log("I am in protected class");
        
    }
}

class Derived extends Base
{
constructor(public x:string){
    super(x);  // this estabilies the deeplinking

}

printData():void{

    super.printData();
}
}

let obj1=new Derived("Hello world");
obj1.display();
obj1.printData();