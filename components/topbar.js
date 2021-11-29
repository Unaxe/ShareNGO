import Link from 'next/link'

export default function TopBar(){
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
                <Link href="/login">
                <div className="ml-auto ">
                <p  className="bg-red-500 p-1 rounded-lg">Login</p>
                </div>
                </Link>
                <Link href="/signup">
                <div className="ml-2 ">
                <p  className="bg-red-500 p-1 rounded-lg">SignIn</p>
                </div>
                </Link>
                <Link href="/signout">
                <div className="ml-2 ">
                    <p  className="bg-red-500 p-1 rounded-lg">LogOut</p>
                </div>
                </Link>
            </div>
        </>
    )
}