import Link from 'next/link'

export default function TopBar(){
    return (
        <>
            <div className="w-full h-24 border-b-2 border-red flex">
                <div className="flex flex-col justify-center items-center">
                    <div className="rounded-full ml-4 bg-white border-2 border-purple-400" ><p ><img className="h-16 w-16" src="/logo.svg" alt="Share N'Go"/></p></div>
                </div>
                <Link href="/accueil">
                    <div className="flex flex-col items-center justify-center ml-8 cursor-pointer">
                        <i className="ri-home-3-line ri-2x"></i>
                        <p>Accueil</p>
                    </div>
                </Link>
                <Link href="/listeLieux">
                <div className="flex flex-col items-center justify-center ml-8 cursor-pointer">
                    <i className="ri-trophy-line ri-2x"></i>
                    <p>Top lieux</p>
                </div>
                </Link>
                <Link href="#">
                <div className="flex flex-col items-center justify-center ml-8 cursor-pointer">
                    <i className="ri-search-line ri-2x"></i>
                    <p>Rechercher</p>
                </div>
                </Link>
                <Link href="#">
                <div className="flex flex-col items-center justify-center ml-8 cursor-pointer">
                    <i className="ri-contacts-line ri-2x"></i>
                    <p>Amis</p>
                </div>
                </Link>
            </div>
        </>
    )
}