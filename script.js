let bar_div = document.querySelector(".bar-div");
let r_nav = document.querySelector(".r-nav");
bar_div.addEventListener("click" , (()=> {
    r_nav.classList.toggle("r-nav-show");
    bar_div.classList.toggle("rotate");

}));

