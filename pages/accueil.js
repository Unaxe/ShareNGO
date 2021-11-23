import Link from 'next/link'

export default function Accueil(){

    return <>
        <div className="fixed top-0 bg-accueil-fond bottom-0 left-0 right-0 flex flex-wrap">
            <div className="mt-4 ml-4"> 
                <div className="flex items-center">
                    <p className="rounded-full bg-white border-2 border-purple-400"><img className="h-16 w-16" src="/logo.svg" alt="Share N'Go"/></p>
                    <div className="ml-8"><h1 className="font-bold">Share'N'Go</h1></div>
                </div>
                <div className="ml-8 mt-8">
                    <ul className="list-none">
                        <li className="inline-block text-red-500 mr-8">Restaurant</li>
                        <li className="inline-block text-red-500 mr-8">Bar Night</li>
                        <li className="inline-block text-red-500 mr-8">Event</li>
                        <li className="inline-block text-red-500 mr-8">Spot Chill</li>
                    </ul>
                </div>
            </div>
            <div className="absolute w-1/2 h-1/2 bg-accueil-w bottom-0 left-0 pt-8 pl-4">
                <div>
                    <h1 className="text-white text-5xl font-bold">Where can I rest ?</h1>
                    <p className="text-white mt-4 text-xl">Find and Share the perfect spot with your friends !!</p>
                    <Link href="/listeLieux"><a className="w-32 mt-5 h-12 text-xl p-auto  rounded-md bg-accueil-button text-white">Maps</a></Link>
                </div>
            </div>
            <div className="absolute w-100 h-100 bg-accueil-images top-0 right-0">
                <div className = "absolute top-16 left-24 "><p><img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg" alt="" className="w-64 h-48"/></p></div>
                <div className = "absolute top-16 right-24 "><p><img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg" alt="" className="w-64 h-48"/></p></div>
                <div className = "absolute bottom-16 left-24 "><p><img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg" alt="" className="w-64 h-48"/></p></div>
                <div className = "absolute bottom-16 right-24 "><p><img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg" alt="" className="w-64 h-48"/></p></div>
            </div>
        </div>

    
    </>
}