javascript
// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.opacity = "0";
    setTimeout(()=> loader.style.display="none", 500);
  }
});

// IP KOPYALA
window.copyIP = function(){
  navigator.clipboard.writeText("play.monstermc.net");
  alert("IP Kopyalandı!");
};

// PARALLAX EFFECT
document.addEventListener("mousemove", (e)=>{
  const hero = document.querySelector(".hero");
  if(hero){
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    hero.style.transform = `translate(${x}px, ${y}px)`;
  }
});


firebase.auth().onAuthStateChanged(user => {

let authArea = document.getElementById("authArea");

if(!authArea) return;

if(user){
authArea.innerHTML = `
<a href="panel.html">Panel</a>
<a href="#" onclick="logout()">Çıkış</a>
`;
}else{
authArea.innerHTML = `
<a href="login.html" class="login-btn">Giriş Yap</a>
`;
}

});

// LOGOUT
function logout(){
firebase.auth().signOut()
.then(()=> location.href="index.html");
}

// LOADER KAPATMA (güvenli)
window.addEventListener("load", () => {

let loader = document.getElementById("loader");

setTimeout(()=>{
loader.style.display = "none";
}, 3000);

});