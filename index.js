let openBtn = document.querySelector(".bx-menu");
let closeBtn = document.querySelector(".bx-x");
let menuBox = document.querySelector(".menu__box");

openBtn.addEventListener("click", ()=>{
    menuBox.classList.add("show");
})
closeBtn.addEventListener("click", ()=>{
    menuBox.classList.remove("show")
})