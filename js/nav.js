let navbar_right_menu = document.querySelector(".right_navbar");

let bar = document.querySelector(".menu_bar");



bar.addEventListener("click",()=>{
    navbar_right_menu.classList.toggle("navbar_show_hide")
})