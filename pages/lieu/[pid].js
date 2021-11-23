import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Avis from "../../components/avis"
import Etoiles from "../../components/etoiles"
import Loading from "../../components/loading"
import { getLieu } from "../../utils/lieus"


const Lieu = () => {
    const router = useRouter()
    const { pid } = router.query
    
    const [lieu,setLieu] = useState(null);
    
    useEffect(async () => {
        setLieu(await getLieu(pid));
        console.log(lieu);
    },[])

    if (!lieu){
        return (<>
            <div className="fixed top-0 bottom-0 left-0 right-0 ">
                <Loading > 
                </Loading > 
            </div>
        </>
        )
    }
    return <>
    <div className="px-8">
        <h1 className="mt-8  text-yellow-500 font-extrabold text-4xl">{lieu.name}</h1>
        <p className="mt-4 truncate">Emplacement géographique : {lieu.emplacement}</p>
        <div className="sm:flex">
    
            <div className=" sm:w-5/12">
                {
                    lieu.rates.map((rate,key) => 
                        <div className="flex" key={key}>
                            <p>{rate.title} : </p>
                            <div className="ml-2">
                                <Etoiles rate={rate.rate}></Etoiles>
                            </div>
                        </div>
                    )
                }
                
                <p>Prix moyen : <span className="font-bold">{lieu.cost}€</span></p>
                <p>Type : <span className="font-bold">{lieu.type}</span></p>
            </div>
            <div className="sm:w-7/12 mt-2">
                <p className=""><img src="/landing_bg.jpg" alt="image"/></p>
            </div>
        </div>
        <div className="lg:flex mb-16">
            <div className="md:w-1/2">
                <h3 className=" mt-16 text-pink-700 font-semibold">Avis de tes amis :</h3>
                {lieu.avis.map((avi,i) =>
                    <div key={i} className="mt-2">
                        <Avis avis={avi}></Avis>
                    </div>
                )}
                </div>
            <div className="w-1/2"></div>
        </div>
    </div>  
    </>

}

export default Lieu