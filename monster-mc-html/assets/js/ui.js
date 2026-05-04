javascript
// BUTTON HOVER EFFECT
document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("mouseover",()=>{
btn.style.transform="scale(1.05)";
});
btn.addEventListener("mouseout",()=>{
btn.style.transform="scale(1)";
});
});

// COMPONENT LOAD
function loadComponent(id, file){
    fetch("components/" + file)
    .then(res => res.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    });
}

// NAVBAR + FOOTER yükle
document.addEventListener("DOMContentLoaded", () => {

    if(document.getElementById("navbar")){
        loadComponent("navbar","navbar.html");
    }

    if(document.getElementById("footer")){
        loadComponent("footer","footer.html");
    }

    if(document.getElementById("sidebar")){
        loadComponent("sidebar","sidebar.html");
    }

    if(document.getElementById("loader-container")){
        loadComponent("loader-container","loader.html");
    }


    function loadComponent(id, file){

fetch("components/" + file)
.then(res => res.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});

}
});