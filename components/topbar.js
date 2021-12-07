import Link from 'next/link'
import { onLogout } from '../utils/auth';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { onAuthStateChanged,getAuth } from "@firebase/auth"
export default function TopBar(){
    const router = useRouter()
    const signOut = (e) => {
        e.preventDefault();
        onLogout();
    }

    const auth = getAuth()
    onAuthStateChanged(auth,user => {
        if(!user) {
            router.push('/login')
        }
    })
    


    return (
        <>
            <div className="w-full h-24 border-b-2 border-red flex">
                <div className="flex flex-col justify-center items-center ml-4">
                    <div className="rounded-full  bg-white border-2 border-purple-400 mt-1" ><p ><img className="h-16 w-16" src="/logo.svg" alt="Share N'Go"/></p></div>
                    <p className="font-bold ">Share N'Go</p>
                </div>
                <Link href="/accueil">
                    <div className="flex flex-col items-center justify-center ml-8 cursor-pointer hover:text-blue-400">
                        <i className="ri-home-3-line ri-2x"></i>
                        <p>Accueil</p>
                    </div>
                </Link>
                <Link href="/listeLieux">
                <div className="flex flex-col items-center justify-center ml-8 cursor-pointer hover:text-blue-400">
                    <i className="ri-trophy-line ri-2x"></i>
                    <p>Top lieux</p>
                </div>
                </Link>
                <Link href="#">
                <div className="flex flex-col items-center justify-center ml-8 cursor-pointer hover:text-blue-400">
                    <i className="ri-search-line ri-2x"></i>
                    <p>Rechercher</p>
                </div>
                </Link>
                <Link href="#">
                <div className="flex flex-col items-center justify-center ml-8 cursor-pointer hover:text-blue-400">
                    <i className="ri-contacts-line ri-2x"></i>
                    <p>Amis</p>
                </div>
                </Link>
                <Link href="/addlieu">
                <div className="flex flex-col items-center justify-center ml-8 cursor-pointer hover:text-blue-400">
                    <i className="ri-add-box-line ri-2x"></i>
                    <p>Créer</p>
                </div>
                </Link>
                <div className="flex flex-col items-center justify-center ml-auto mr-8 cursor-pointer hover:text-blue-400" onClick={signOut}>
                    <i className="ri-logout-box-r-line ri-2x"></i>
                    <p>Se déconnecter</p>
                </div>        
            </div>
        </>
    )
}