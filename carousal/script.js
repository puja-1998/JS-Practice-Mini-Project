let imgItm = document.querySelectorAll(".item img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dots = document.querySelectorAll(".dot");
let autoplay = document.querySelector("#autoplay");
let range = document.querySelector("#autoplayInterval");
let index =0;

let update = (index)=>{
    imgItm.forEach((img)=>{
        img.style.display = "none";
    });
    imgItm[index].style.display = "block";
    
    dots.forEach(dot=>{dot.classList.remove("myDots")})
    dots[index].classList.toggle("myDots")
}

update(index);
next.addEventListener('click',()=>{
    index = (index + 1 ) % imgItm.length;
    update(index);
})
prev.addEventListener('click',()=>{
    index = (index - 1 + imgItm.length) % imgItm.length;
    update(index);
})

let time=parseInt(range.value);

range.addEventListener('change',()=>{
    clearInterval(timeId)
    time=parseInt(range.value);
    timeId = setInterval(timeFunction,time)
    
})

let timeId;

autoplay.addEventListener('change',()=>{
    if(autoplay.checked){
        timeId = setInterval(timeFunction,time)
    }else{
        clearInterval(timeId)
    }
})

let timeFunction = ()=>{
    index = (index + 1 ) % imgItm.length;
    update(index);
}

dots.forEach((dot,i)=>{
    dot.addEventListener('click',()=>{
        index=i;
        update(index);
    })
})