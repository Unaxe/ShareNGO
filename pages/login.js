import React, {useState} from 'react'
import { onLogin } from '../utils/auth';
import { obtainAuth } from '../utils/auth'
import { useRouter } from 'next/dist/client/router'; 
import { useEffect } from 'react';
export default function Login() {

    const router = useRouter();
    const [state, setState] = useState(0)
    useEffect(() => {
        console.log("test")
        const thisauth = obtainAuth();
        if(thisauth.currentUser){
            console.log(thisauth.currentUser)
            router.push('/accueil')
        }
    },[state])

    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = {
            mail:mail,
            password:password
        };
        onLogin(form);
        setState(1-state);
    }

    return (<>
        <div className="w-1/3 flex flex-col justify-center mx-auto p-1 bg-purple-500 rounded-md">
            <h1 className="">Login</h1>
            <form class="flex flex-col" onSubmit={handleSubmit}>
                <input type="text" className="border-2 p-1 border-black rounded-md mb-4" name="name" placeholder="Mail" onChange={e => setMail(e.target.value)} value={mail}></input>
                <input type="password" className="border-2 p-1 border-black rounded-md mb-4" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}></input>
                <button>Se connecter</button>
            </form>
        </div>
        </>
    )
}
