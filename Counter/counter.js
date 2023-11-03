const countvalue = document.querySelector("#counter");

function increment(){
    //get the value from UI
    let value = parseInt(countvalue.innerText);
    // update the value
    value = value+1;
    //set the value to UI
    countvalue.innerText= value;
}

function decrement(){
    //get the value from UI
    let value = parseInt(countvalue.innerText);
    // update the value
    value = value-1;
    //set the value to UI
    countvalue.innerText= value;
}