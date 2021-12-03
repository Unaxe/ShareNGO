import { auth,firebaseApp } from "./firebase";
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

onAuthStateChanged(auth , user => {
    if (user) {
        console.log('user logged in :',user)
    }
    else {
        console.log("user logged out")
    }
}) 

function obtainAuth() {
    const thisauth = getAuth(firebaseApp);
    return thisauth;
}


const onSignup = (form) => {
    const email = form.mail;
    const password = form.password;
    createUserWithEmailAndPassword(auth,email,password).then(cred => {        
    })
}

const onLogout = () => {
    auth.signOut()
}

const onLogin = (form) => {
    const email = form.mail;
    const password = form.password;

    signInWithEmailAndPassword(auth,email,password).then(cred => {
    })
}

export {onSignup,onLogout,onLogin,obtainAuth};