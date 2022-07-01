let lightbulb = document.getElementById("bulb");
let siteStatus = 0;
lightbulb.addEventListener("click",function(){
    if(siteStatus == 0){
        lightbulb.classList.add("btn-on");
        siteStatus = 1;
    }else{
        lightbulb.classList.remove("btn-on");
        siteStatus = 0;
    }
});