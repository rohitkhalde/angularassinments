function doWork(x) {
    if (x) {
        var y = 10;
        console.log("in if true y=" + y);
    }
    console.log("in if true y=" + y);
}
doWork(true);
doWork(false);
//console.log(`in if true y=${y}`)
