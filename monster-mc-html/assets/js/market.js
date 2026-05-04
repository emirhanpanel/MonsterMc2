javascript
import { auth, db } from "../../config/firebase.js";
import {
doc,
getDoc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const products = [
{name:"VIP", price:50},
{name:"VIP+", price:100},
{name:"LEGEND", price:200}
];

const container = document.getElementById("products");

products.forEach(p=>{
let div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<h3>${p.name}</h3>
<p>${p.price} coin</p>
<button class="btn play" onclick="buy('${p.name}',${p.price})">Satın Al</button>
`;

container.appendChild(div);
});

// SATIN AL
window.buy = async function(name,price){

let user = auth.currentUser;
if(!user){
alert("Giriş yapman gerekiyor");
return;
}

let ref = doc(db,"users",user.uid);
let snap = await getDoc(ref);
let data = snap.data();

if(data.coin < price){
alert("Yetersiz coin");
return;
}

await updateDoc(ref,{
coin: data.coin - price,
rank: name
});

alert("Satın alma başarılı!");
location.reload();
}
function buyItem(price){

const user = firebase.auth().currentUser;

if(!user) return alert("Giriş yap!");

const db = firebase.firestore();

const ref = db.collection("users").doc(user.uid);

ref.get().then(doc=>{

let coins = doc.data().coins;

if(coins < price){
alert("Yetersiz coin!");
return;
}

// coin düş
ref.update({
coins: coins - price
})

.then(()=>{
alert("Satın alındı!");
});

});

}
