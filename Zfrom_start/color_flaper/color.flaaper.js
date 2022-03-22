let btn=document.querySelector(".random");
let color_text=document.querySelector('.color_text');
let arrayOfColors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener('click',function(){
    let hex='#';
    for(let i=0; i<6 ; i++){
        hex+=arrayOfColors[getRandom()];
    }
    
    document.body.style.backgroundColor=hex;
    color_text.textContent=hex;
});
// console.log(hex);
function getRandom(){
    return Math.floor(Math.random()*arrayOfColors.length-1);
}
console.log(getRandom());