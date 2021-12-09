let btns=document.querySelectorAll(".q-btn");


btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let span=document.querySelector(".minus-btn");
        span.classList.toggle("showed");
        let answer=document.querySelector(".answer");
        answer.classList.toggle("showed");
        let plusbtn=document.querySelector(".plus-btn");
        plusbtn.classList.toggle("no")
    })
})