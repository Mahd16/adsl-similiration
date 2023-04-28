let s0 = document.getElementById('img');
let s1 = s0.nextElementSibling;
let s2 = s1.nextElementSibling;


let images = [s0,s1,s2];
let num = 0;
let slide = document.querySelector('main .slide');

function next(){
    num++;
    if(num>=3){
        num=0;
    };
    slide.style.backgroundImage = images[num];
};

