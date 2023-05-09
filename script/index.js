const btn= document.querySelector('.humburger');
const nav= document.querySelector('.mobile_nav');


function navLogic(){
    if(nav.classList.contains("open")){
        nav.classList.remove("open");
        nav.classList.add("close");
    }else if(nav.classList.contains("close")){
        nav.classList.add("open");
        nav.classList.remove("close");
    }
}

function openTab(){
    if(nav.classList.contains("open")){
        nav.style.insetInlineEnd="0%"
    }
}
function closeTabe(){
    if(nav.classList.contains("close")){
        nav.style.insetInlineEnd="-130%"
    }
}
function mobileTab(){
    navLogic();
    openTab();
    closeTabe();
}


btn.addEventListener('click', mobileTab)

