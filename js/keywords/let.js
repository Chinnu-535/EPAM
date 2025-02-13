function letExample(){
    let y = 20;
    console.log("Initial value of y:",y);
    if(true)
    {
        let y = 50;
        console.log("Inside block of y:",y);
    }
    console.log("Outside block y:",y);
}
letExample();