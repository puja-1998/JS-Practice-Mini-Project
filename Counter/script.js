let counter = document.querySelector("#counter");
 let h1Tag = document.querySelector(".h1tag");
let incbtn = document.querySelector(".incbtn");
let decbtn = document.querySelector(".decbtn");

let num = 0;

incbtn.addEventListener('click', ()=>{
    
    if(num>=10){
        return;
    }
    else{
        num++;
    }
    //h1Tag.innerHTML="";
    h1Tag.innerText = num;  
})

decbtn.addEventListener('click', ()=>{
    num--;
    if(num<0){
        return;
    }
    //h1Tag.innerHTML="";
    h1Tag.innerText = num;
})