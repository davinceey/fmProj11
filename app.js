const shareButton = document.querySelector(".icon__share");
const media = document.querySelector(".social__media");

shareButton.addEventListener("click", ()=>{
    media.classList.toggle("active");
})