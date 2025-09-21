let hamburger = document.querySelector(".nav_3");
let nav_2 = document.querySelector(".nav_2");
let flag = true;
hamburger.addEventListener("click", (()=>{
if (flag) {
        nav_2.style.left = "0";
        hamburger.style.color = "white";
        hamburger.style.backgroundColor = "black";
        flag = false;
    } else{
        nav_2.style.left = "100vw";
        hamburger.style.color = "black";
        hamburger.style.backgroundColor = "#f5f5f5";
        flag = true;
    }
}))
// questions to ask sir
// agar hm containt likhne ke liye headings ka use na krke paragraph ka use kre or uska font size or width bda ke usse heading jaise dekhne layak banaye to usse koi problem to na hogi ?
// wix ki website se discover section wala slider kaise banaye
// mere project ka footer contaont design karao
// how to make it responsive
//