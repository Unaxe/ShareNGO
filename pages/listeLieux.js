import Loading from "../components/loading"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { getLieus } from "../utils/lieus"

export default function ListLieux() {
    
    const [lieus,setLieus] = useState(null);
    
    useEffect(async () => {
        setLieus(await getLieus("JlxNHxZunZiFbKyVSeiU"));
        console.log(lieus);
    },[])
    console.log(lieus);

    if (!lieus){
        return (<>
            <div className="fixed top-0 bottom-0 left-0 right-0 ">
                <Loading > 
                </Loading > 
            </div>
        </>
        )
    }
    return (
        <>
            <main>
                <div>
                    {lieus.docs.map((lieu) =>{
                        return <div key={lieu.id} className = "w-full h-64 bg-red-500"> 
                            <p>
                                <Link href={"/lieu/"+lieu.id}>
                                    <a>{lieu.data().name}</a>
                                </Link>
                            </p>
                        </div>
                    })
                    }
                    <div>Bonjour</div>
                </div>
            </main>
        </>
    )
}