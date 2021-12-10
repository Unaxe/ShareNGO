import Loading from "../components/loading"
import Link from 'next/link'
import { useEffect, useState } from "react"
import { getLieus } from "../utils/lieus"
import MiniLieu from "../components/miniLieu"
import TopBar from "../components/topbar"

export default function ListLieux() {
    
    const [lieus,setLieus] = useState(null);
    function getMoyenne(array){
        let s = 0;
        for(let i=0;i<array.length;i++){
            s+=array[i];
        }
        s /= array.length;
        return s;
    } 
    
    useEffect(async () => {
        await setLieus((await getLieus()));
    },[])


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
                <div className="bg-gray-200">
                <div className="lg:w-3/4 lg:mx-auto bg-white pt-16">
                    <h2 className="text-3xl text-center h-3 mb-16 text-pink-700 font-bold">Liste des lieux</h2>
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
                </div>
            </main>
        </>
    )
}