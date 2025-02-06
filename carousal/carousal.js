let images = document.querySelectorAll(".item img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dots = document.querySelectorAll(".dot");
let InfiniteScroll = document.querySelector("#InfiniteScroll");
let autoplay = document.querySelector("#autoplay");
let autoplayInterval = document.querySelector("#autoplayInterval");
let index = 0;

function update(index){
    images.forEach((i)=>{
        i.style.display = "none";
    });
    images[index].style.display = "block";

    dots.forEach((dot)=> {
        dot.classList.remove("myDots");
    });
    dots[index].classList.add("myDots");
}
update(index);

next.addEventListener('click', ()=>{
    
    if(InfiniteScroll.checked){
        index = (index + 1) % images.length;
        update(index); 
    }else if(index < images.length-1){
        index++;
        update(index);
        prev.disabled = false; 
    }
    
    
    
});

if(index==0){
    prev.disabled=true;
}

prev.addEventListener('click', ()=>{
    
    if(InfiniteScroll.checked){
        index = (index - 1 + images.length) % images.length;
        update(index);
    }
    else if(index>0){
        index--;
        update(index);
    }
    
    
})

dots.forEach((dot, i)=>{
    dot.addEventListener('click', ()=>{
        index = i;
        update(index);
    })
});

let time = parseInt(autoplayInterval.value);
autoplayInterval.addEventListener('change',()=>{
    clearInterval(timeId);
    time = parseInt(autoplayInterval.value);
    timeId  = setInterval(()=>{
        index = (index + 1) % images.length;
        update(index);
    },time)
})

let timeId;
autoplay.addEventListener('change',()=>{
        if(autoplay.checked){
            timeId  = setInterval(()=>{
                index = (index + 1) % images.length;
                update(index);
            },time)
        }
        else{
            clearInterval(timeId)
        }
   
});



