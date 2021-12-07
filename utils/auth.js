import { auth,firebaseApp,firestore } from "./firebase"
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"
import { delBasePath } from "next/dist/shared/lib/router/router"

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
        return firestore.collection("users").doc(cred.user.uid).set({
            pseudo: form.pseudo
        })
    })
    .catch(err => {
        console.log(err.message)
    })
}
const getUser = async (user) => {
    const snapshot = await firestore.collection("users").doc(user.uid).get().then()
    return (snapshot.data());
};

const onLogout = () => {
    auth.signOut()
}

const onLogin = (form) => {
    const email = form.mail;
    const password = form.password;

    signInWithEmailAndPassword(auth,email,password).then(cred => {
    })
}

export {onSignup,onLogout,onLogin,obtainAuth,getUser};