import React, {useState} from 'react'
import { onLogin } from '../utils/auth';
import { onAuthStateChanged,getAuth } from "@firebase/auth"
import { onSignup } from '../utils/auth'
import { useRouter } from 'next/dist/client/router'; 
import { useEffect } from 'react';
import Link from 'next/link';

export default function Login() {

    const [maillogin, setMaillogin] = useState("");
    const [passwordlogin, setPasswordlogin] = useState("");
    const [mailsignup, setMailsignup] = useState("");
    const [passwordsignup, setPasswordsignup] = useState("");
    const [pseudo,setPseudo] = useState("");
    const [signupmessage, setsignup] = useState(null)
    
    
    const router = useRouter()

    const auth = getAuth()
    onAuthStateChanged(auth,user => {
        
        if(user) {
            router.push('/accueil')
        }
    })


    const handleSubmitLogin = (evt) => {
        evt.preventDefault()
        const form = {
            mail:maillogin,
            password:passwordlogin
        };
        onLogin(form)
    }

    const handleSubmitSignup = (evt) => {
        evt.preventDefault();
        const form = {
            mail:mailsignup,
            password:passwordsignup,
            pseudo:pseudo
        };
        onSignup(form)
    }

    return (<>
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 flex justify-center items-center">
            <div className="mx-auto">
                <h2 className="font-bold text-yellow-500 text-center text-xl">Se connecter</h2>
                <div className="bg-indigo-400 p-2 rounded-md">
                    <form className="flex flex-col" onSubmit={handleSubmitLogin}>
                        <label for="name" className="text-white">Mail:</label>
                        <input type="text" className="border-2 p-1 border-black rounded-md mx-4 mb-4" name="name" placeholder="Mail" onChange={e => setMaillogin(e.target.value)} value={maillogin}></input>
                        <label for="password" className="text-white">Mot de passe:</label>
                        <input type="password" className="border-2 p-1 border-black rounded-md mx-4  mb-4" name="password" placeholder="Password" onChange={e => setPasswordlogin(e.target.value)} value={passwordlogin}></input>
                        <button className="p-1 bg-gray-200 rounded-md">Se connecter</button>
                    </form>
                </div>
            </div>
            <div className="mx-auto">
                <h2 className="font-bold text-yellow-500 text-center text-xl">Créer un compte</h2>
                <div className="bg-indigo-400 p-2 rounded-md">
                    <form className="flex flex-col" onSubmit={handleSubmitSignup}>
                        <label for="name" className="text-white mb-2 mt-2">Mail:</label>
                        <input type="text" className="border-2 p-1 border-black rounded-md mx-4 " name="name" placeholder="Mail" onChange={e => setMailsignup(e.target.value)} value={mailsignup}></input>
                        <label for="password" className="text-white my-2">Mot de passe:</label>
                        <input type="password" className="border-2 p-1 border-black rounded-md mx-4  mb-4" name="password" placeholder="Password" onChange={e => setPasswordsignup(e.target.value)} value={passwordsignup}></input>
                        <label for="pseudo" className="text-white my-2">Pseudo</label>
                        <input type="text" className="border-2 p-1 border-black rounded-md mx-4  mb-4" name="pseudo" placeholder="Pseudo" onChange={e => setPseudo(e.target.value)} value={pseudo}></input>
                        <button className="p-1 bg-gray-200 rounded-md">S'enregistrer</button>
                    </form>
                    <div>
                        {signupmessage}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
