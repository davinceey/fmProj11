const shareButton = document.querySelector(".icon__share");
const media = document.querySelector(".social__media");
const body = document.querySelector("body");

shareButton.addEventListener("click", ()=>{
    // if(media.classList.contains("active")){
    //     body.addEventListener("click", ()=>{
    //         media.classList.remove("active");
    //     })
        
    // }
    toggleMedia();
})
function toggleMedia(){
    media.classList.toggle("active");
}

