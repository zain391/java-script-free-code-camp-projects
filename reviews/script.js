let reviews=[
    {
        id:0,
        img:"https://scontent.flyp5-1.fna.fbcdn.net/v/t1.6435-9/153992473_784611095477585_1002077561336581357_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE02ai8lY1ZHbJl09CZmhczwQ05Ee2-DQrBDTkR7b4NChaTxeqprcTCY5LWlYWcLFA7gioAre-8GThVYoZ1fTYe&_nc_ohc=zCHS4cGsCxIAX-217Gx&_nc_ht=scontent.flyp5-1.fna&oh=6e3506740e4a99a32d1dff3fd95ec8c6&oe=61CA5524",
        name1:"Zain Qamer",
        job:"SEO Master",
        desc:"I am Zain Qamer and i am going to the Search Engine Optimization of your website so that your website grow up day by day on the internet.This will enhance your Buisness 100% with the best results"
    },
    {
        id:1,
        img:" https://scontent.flyp5-1.fna.fbcdn.net/v/t39.30808-6/260322749_2050523728445934_7324120649312402880_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGSFd4xKzZmu6Fs0wkysIm7mJ7-PoUtVkCYnv4-hS1WQCeewgHovf-TdL_PMxXpeql2VyORDXcvjW1O5IZ76NSR&_nc_ohc=uA9_4w3VVAYAX8qAVi1&_nc_ht=scontent.flyp5-1.fna&oh=489f1016afb0f0d16091999a65f65af3&oe=61AB16EB",
        name1:"Jaffer Hadi",
        job:"Chat-Bot developer",
        desc:"I am Jaffar-Hadi i will create a Artificial Chat-bot that will automate your reply to your customers 24/7.These chat-Bot use the Artificial intellegence to answer the questions of customers answers."
    },
    {
        id:2,
        img:"https://scontent.flyp5-1.fna.fbcdn.net/v/t1.6435-9/126482309_3429155440514045_9176942149824158087_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFVUt7oGAiN3oWiUmVbRgaWoN5QmzBem5Og3lCbMF6bk4g_1H4twrOetcxOYC6zCKqfkfXicv-Y6NP7R-5TLCZt&_nc_ohc=6hSCNNMgTpwAX_YtNtU&_nc_ht=scontent.flyp5-1.fna&oh=68c324fdc1088dac18515843476baf4a&oe=61CD0E3E",
        name1:"Harron-Shahid",
        job:"Web-developer",
        desc:"I am Harron-shahid i am a experienced Web-Developer with an experience of more than 1 year. I used to Develop website by using the advanced web technologies."
    },
    // {
    //     id:2,
    //     img:"",
    //     name1:"",
    //     job:"",
    //     desc:""
    // },
];
 let counter=0;
let img=document.getElementById("img");
let name1=document.getElementById("name1");
let job=document.getElementById("job");
let desc=document.getElementById("desc");
// getting buttons
let back=document.getElementById("back")
let next=document.getElementById("next");
let surprise=document.getElementById("surprise");

function showPerson(){
    let item=reviews[counter];
    img.src=item.img;
    name1.innerHTML=item.name1;
    job.innerHTML=item.job;
    desc.innerHTML=item.desc;
}

window.addEventListener("DOMContentLoaded",function(){
    showPerson();
});
next.onclick=function(){
    counter++
    if(counter > reviews.length -1){
        counter=0;
    }
    showPerson();
}
back.onclick=function(){
    counter--
   if(counter < 0){
       counter=reviews.length;
   }
    showPerson();
}
surprise.onclick=function(){
    counter=Math.floor(Math.random()*reviews.length);
    console.log(counter);
    showPerson();
}