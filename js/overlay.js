let overlayMenuShown = false;
function showOverlayMenu(){
    const menu = document.getElementById("overlayMenu");
    if(overlayMenuShown){
        menu.classList.remove("showcase__menu-open");
        overlayMenuShown = false;
    }else{
        menu.classList.add("showcase__menu-open");
        overlayMenuShown = true;
    }
}


let overlayActiveDesign = "none"
let overlayOpacity = 2;

function showOverlayDesign(type){
const designMobile = document.getElementById("mobile");
const designDesktop = document.getElementById("desktop");
const designTablet = document.getElementById("tablet");
const overlaySlider = document.getElementById("vis");

    overlayOpacity = overlaySlider.value;

    designMobile.style.opacity = overlayOpacity/5;
    designDesktop.style.opacity = overlayOpacity/5;
    designTablet.style.opacity = overlayOpacity/5;

    if (overlayActiveDesign===type){
        overlayActiveDesign = "none"
    }else{
        overlayActiveDesign = type
    }

    if(overlayActiveDesign==="none"){
        designMobile.style.display = "none";
        designDesktop.style.display = "none";
        designTablet.style.display = "none";
    }else if (overlayActiveDesign==="mobile"){
        designDesktop.style.display = "none";
        designMobile.style.display = "block"
        designTablet.style.display = "none";

    }else if(overlayActiveDesign==="desktop"){
        designDesktop.style.display = "block";
        designMobile.style.display = "none"
        designTablet.style.display = "none";

    }else{
        designDesktop.style.display = "none";
        designMobile.style.display = "none"
        designTablet.style.display = "block";

    }
  
}