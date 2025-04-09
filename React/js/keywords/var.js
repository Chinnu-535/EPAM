function varExample(){
    var x = 20;
    console.log("Initial value of x:",x);
    if(true)
    {
        var x = 30;
        console.log(x);
    }
    console.log(x);
}
varExample();