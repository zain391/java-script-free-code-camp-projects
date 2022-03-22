let btn=document.querySelector(".random");
let color_text=document.querySelector('.color_text');
let hex='#';
let arrayOfColors=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener('click',function(){
    for(let i=0; i<6 ; i++){
        hex+=arrayOfColors[getRandom()];
    }
    document.body.style.backgroundColor=hex;
});
color_text.textContent=hex;
function getRandom(){
    return Math.floor(Math.random()*arrayOfColors.length);
}
getRandom();