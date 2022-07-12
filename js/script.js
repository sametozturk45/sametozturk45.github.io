let lightbulb = document.getElementById("bulb");
let siteStatus = 0;
let closeBar = document.getElementsByClassName("close-bar");
let openBar = document.getElementById("openBar");
let openAbout = document.getElementById("openAbout");
let navbar = document.getElementById("navbar");
let aboutMe = document.getElementById("aboutMeContent");
let navbarContent = document.getElementById("navbarContent");
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
for(var i =0; i<closeBar.length; i++){
    closeBar[i].addEventListener("click",function(){
        navbar.style.transform = "translateX("+(100)+"%)";
        body.classList.remove("max-height");
        setTimeout(()=>{navbarContent.classList.remove("d-none");
        aboutMe.classList.remove("d-none");},500);
    });
}

openBar.addEventListener("click",function(){
    aboutMe.classList.add("d-none");
    navbar.style.transform = "translateX("+(0)+"%)";
    body.classList.add("max-height");
    window.scrollTo({top:0,behavior:'smooth'});
});

openAbout.addEventListener("click",function(){
    navbarContent.classList.add("d-none");
    navbar.style.transform = "translateX("+(0)+"%)";
    body.classList.add("max-height");
    window.scrollTo({top:0,behavior:'smooth'});
});
