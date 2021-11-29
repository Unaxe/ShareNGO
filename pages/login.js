
import React, {useState} from 'react'
import { onLogin } from '../utils/auth';

export default function Login() {

    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = {
            mail:mail,
            password:password
        };
        onLogin(form);
    }

    return (<>
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Mail" onChange={e => setMail(e.target.value)} value={mail}></input>
                <input type="text" name="address" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}></input>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}
