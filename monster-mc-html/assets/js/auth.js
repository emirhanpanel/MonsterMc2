javascript
import { auth, db } from "../../config/firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// REGISTER
const registerForm = document.getElementById("registerForm");

if(registerForm){
registerForm.addEventListener("submit", async (e)=>{
e.preventDefault();

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let user = await createUserWithEmailAndPassword(auth,email,password);

await setDoc(doc(db,"users",user.user.uid),{
username: username,
coin: 100,
rank: "Oyuncu"
});

alert("Kayıt başarılı");
location.href="login.html";
});
}

// LOGIN
window.loginUser = async function(){
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;

await signInWithEmailAndPassword(auth,email,pass);
location.href="panel.html";
}

// LOGOUT
window.logout = function(){
signOut(auth);
location.href="login.html";
}

// AUTH KONTROL
onAuthStateChanged(auth,(user)=>{
if(!user && location.pathname.includes("panel")){
location.href="login.html";
}
});

firebase.auth().onAuthStateChanged(user => {

    let area = document.getElementById("navUserArea");

    if(!area) return;

    if(user){
        area.innerHTML = `
            <span>${user.email}</span>
            <a href="panel.html" class="login-btn">Panel</a>
        `;
    } else {
        area.innerHTML = `
            <a href="login.html" class="login-btn">Giriş Yap</a>
        `;
    }

// FIREBASE
const auth = firebase.auth();
const db = firebase.firestore();

// REGISTER
function registerUser(){

let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;

if(!email || !pass){
alert("Boş bırakma!");
return;
}

auth.createUserWithEmailAndPassword(email, pass)
.then(userCredential => {

let user = userCredential.user;

// 🔥 DATABASE'E EKLE
db.collection("users").doc(user.uid).set({
email: email,
coins: 0,
role: "user",
createdAt: new Date()
})

.then(()=>{
alert("Kayıt başarılı!");
location.href="panel.html";
});

})
.catch(err=>{
alert(err.message);
});

}

});