javascript
import { auth } from "../../config/firebase.js";

auth.onAuthStateChanged(user=>{
if(!user){
location.href="login.html";
}
});

