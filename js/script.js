let lightbulb = document.getElementById("bulb");
let siteStatus = 0;
let closeBar = document.getElementById("closeBar");
let openBar = document.getElementById("openBar");
let navbar = document.getElementById("navbar");
let body = document.querySelector("body");
lightbulb.addEventListener("click",function(){
    if(siteStatus == 0){
        lightbulb.classList.add("btn-on");
        siteStatus = 1;
    }else{
        lightbulb.classList.remove("btn-on");
        siteStatus = 0;
    }
});

closeBar.addEventListener("click",function(){
    navbar.style.transform = "translateX("+(100)+"%)";
    body.classList.remove("max-height");
});

openBar.addEventListener("click",function(){
    navbar.style.transform = "translateX("+(0)+"%)";
    body.classList.add("max-height");
});