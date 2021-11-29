import { auth } from "./firebase";

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in :',user)
    }
    else {
        console.log("user logged out")
    }
})  


const onSignup = (form) => {
    
    const email = form.mail;
    const password = form.password;

    auth.createUserWithEmailAndPassword(email,password).then(cred => {        
    })
    console.log(email,password)
}

const onLogout = () => {
    auth.signOut()
}

const onLogin = (form) => {
    const email = form.mail;
    const password = form.password;

    auth.signInWithEmailAndPassword(email,password).then(cred => {
    })
}

export {onSignup,onLogout,onLogin};