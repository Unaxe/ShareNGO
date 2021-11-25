import Loading from "../components/loading"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { getLieus } from "../utils/lieus"
import MiniLieu from "../components/miniLieu"
import TopBar from "../components/topbar"

export default function ListLieux() {
    
    const [lieus,setLieus] = useState(null);
    
    useEffect(async () => {
        setLieus(await getLieus());
        console.log(lieus);
    },[])
    console.log(lieus);

    if (!lieus){
        return (<>
            <div className="fixed top-0 bottom-0 left-0 right-0 ">
                <TopBar></TopBar>
                <Loading > 
                </Loading > 
            </div>
        </>
        )
    }
    if(lieus.docs.length==0){
        return (<>
        <div className="fixed top-0 bottom-0 left-0 right-0">
                <TopBar></TopBar>
                <div class="mt-64 text-center">Il n'y a pas de lieux dans la BDD</div> 
            </div>
        </>)
    }
    return (
        <>
            <main>
                <TopBar/>
                <div className="lg:w-3/4 lg:mx-auto">
                    {lieus.docs.map((lieu) =>{
                        return <div key={lieu.id} className = "w-full mb-4"> 
                            <p>
                                <Link href={"/lieu/"+lieu.id}>
                                    <a>
                                        <MiniLieu lieu={lieu.data()}></MiniLieu>
                                    </a>
                                </Link>
                            </p>
                        </div>
                    })
                    }
                </div>
            </main>
        </>
    )
}