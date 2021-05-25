

function doWork(x:boolean){

    if(x){
        var y=10;   //difference between let and var
        console.log(`in if true y=${y}`);
    }
    console.log(`in if true y=${y}`)
}

doWork(true);

doWork(false);
//console.log(`in if true y=${y}`)