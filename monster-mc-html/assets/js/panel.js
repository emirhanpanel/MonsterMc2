javascript
import { auth, db } from "../../config/firebase.js";
import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

auth.onAuthStateChanged(async user=>{
if(user){

let ref = doc(db,"users",user.uid);
let snap = await getDoc(ref);

let data = snap.data();

document.getElementById("username").innerText = data.username;
document.getElementById("coins").innerText = data.coin;
document.getElementById("rank").innerText = data.rank;

}
});

auth.onAuthStateChanged(user => {

if(user){

db.collection("users").doc(user.uid).get()
.then(doc => {

let data = doc.data();

document.getElementById("username").innerText = data.username;
document.getElementById("coins").innerText = data.coins;
document.getElementById("rank").innerText = data.rank;

});

} else {
location.href="login.html";
}
const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user => {

if(user){

db.collection("users").doc(user.uid).get()
.then(doc => {

let data = doc.data();

// HTML'e yaz
document.getElementById("userEmail").innerText = data.email;
document.getElementById("userCoins").innerText = data.coins;

});

}else{
location.href="login.html";
}

});

});
