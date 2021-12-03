import React, {useState} from 'react'
import { onLogin } from '../utils/auth';
import { obtainAuth } from '../utils/auth'
import { useRouter } from 'next/dist/client/router'; 
import { useEffect } from 'react';
import Link from 'next/link';

export default function Login() {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [state,setState] = useState(0)

    const router = useRouter()


    useEffect(() => {
        console.log("test")
        setTimeout(()=>{
        const thisauth = obtainAuth()
        if(thisauth.currentUser){
            console.log(thisauth.currentUser)
            router.push('/accueil')
        }else {
            console.log("ahaa")
        }
    },3000)
    },[state])

    


    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = {
            mail:mail,
            password:password
        };
        setState(1-state)
        onLogin(form)
    }

    return (<>
        {/* <div className="w-1/3 flex flex-col justify-center mx-auto p-1 bg-purple-500 rounded-md">
            <h1 className="">Login</h1>
            <form class="flex flex-col" onSubmit={handleSubmit}>
                <input type="text" className="border-2 p-1 border-black rounded-md mb-4" name="name" placeholder="Mail" onChange={e => setMail(e.target.value)} value={mail}></input>
                <input type="password" className="border-2 p-1 border-black rounded-md mb-4" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}></input>
                <p>Vous n'avez pas encore de compte ? <Link href="/signup"><a className="underline text-blue-400">Créez en un</a></Link></p>
                <button>Se connecter</button>
            </form>
        </div> */}
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 grid grid-rows-2 justify-center">
            <div>Login</div>
            <div>SignIn</div>
        </div>
        </>
    )
}
