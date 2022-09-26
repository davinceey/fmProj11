const shareButton = document.querySelector(".icon__share");
const media = document.querySelector(".social__media");
const body = document.querySelector("body");
const overLay = document.querySelector(".overlay");
let isDisplay = false;


shareButton.addEventListener("click", ()=>{  

    if(media.classList.contains("active")){
        overLay.addEventListener("click", removeMedia);
    }
    toggleMedia();
})

function toggleMedia(){
        media.classList.toggle("active");
        overLay.classList.toggle("lay");
}

function removeMedia(){
    media.classList.remove("active");
    overLay.classList.remove("lay");
}
    
