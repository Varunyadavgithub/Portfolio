// Code for hamburger-nav...
function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

// Code to generate Dynamic text on screen...
const text=document.querySelector(".sec-text");
const textload = ()=>{
    setTimeout( ()=>{
        text.innerHTML="Programer";
    }, 4000)
    setTimeout( ()=>{
        text.innerHTML="MERN Stack Developer"
    }, 8000)
    setTimeout( ()=>{
        text.innerHTML="Problem Solver";
    }, 12000)
    setTimeout( ()=>{
        text.innerHTML="HardCore DSA Lover";
    }, 16000)
}
textload();
setInterval(textload,12000);
