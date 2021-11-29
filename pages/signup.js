
import React, {useState} from 'react'
import { onSignup } from '../utils/auth';

export default function SignUp() {

    const [mail, setMail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = {
            mail:mail,
            password:password
        };
        onSignup(form);
    }

    return (<>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Mail" onChange={e => setMail(e.target.value)} value={mail}></input>
                <input type="text" name="address" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}></input>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}
