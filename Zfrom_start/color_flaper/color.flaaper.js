let btn=document.querySelector(".random");
console.log(btn);
// now we need to get the text 
let color_text=document.querySelector('.color_text');
console.log(color_text);
let arrayOfColors=['green','red','blue'];
let randomNumber=2;
document.body.style.backgroundColor=arrayOfColors[randomNumber];
color_text.textContent=arrayOfColors[randomNumber];
function getRandom(){
    return Math.floor(Math.random()*3);
}