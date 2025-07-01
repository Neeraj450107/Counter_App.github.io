let countNumber = document.getElementById("countNumber")
let reset = document.querySelector('#reset')

function increment(){
    let value = parseInt(countNumber.innerText);
    value = value + 1 ;
    countNumber.innerText = value ;
}

function decrement(){
    let value = parseInt(countNumber.innerText);
    value = value - 1 ;
    countNumber.innerText = value;
}

function reload(){
    window.location.reload();
}