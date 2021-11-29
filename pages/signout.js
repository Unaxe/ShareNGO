import React from 'react'
import { onLogout } from '../utils/auth';

export default function signout() {
    const signOut = (e) => {
        e.preventDefault();
        
        onLogout();
    }
    return (
        <div>
            <button className="bg-red-400 rounded md p-1 mt-2" onClick={signOut}>SignOut</button>
        </div>
    )
}
