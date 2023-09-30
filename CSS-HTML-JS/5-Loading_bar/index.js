const counterE1=document.querySelector(".counter");
const barE1=document.querySelector(".loading-bar-front");

let idx=0;
updateNum()

function updateNum(){
    counterE1.innerHTML=`<div class="counter">${idx}%</div>`;
    //barE1.innerHTML=`<hr class="loading-bar-front width="${idx}%">`;
    idx++;
    if(idx<101){
        setTimeout(updateNum,10)
    }
}

























//https://www.youtube.com/watch?v=DzSLUdJWrEQ&t=233s