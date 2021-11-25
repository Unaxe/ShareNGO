import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Avis from "../../components/avis"
import Etoiles from "../../components/etoiles"
import Loading from "../../components/loading"
import TopBar from "../../components/topbar"
import { getLieu,addRate } from "../../utils/lieus"


const Lieu = () => {
    const router = useRouter()
    const { pid } = router.query
    const [lieu,setLieu] = useState(null);
    const [avis,setAvis] = useState(null);

    useEffect(async () => {
        setLieu(await getLieu(pid));
        console.log(lieu);
    },[])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = {
            avis: [...lieu.avis, 
                {
                    content: avis,
                    name: "user"
                }
            ]
        };

        addRate(pid,form);
        console.log(form);
        setLieu( {...lieu,avis:form.avis});
    }

    if (!lieu){
        return (<>
            <div className="fixed top-0 bottom-0 left-0 right-0 ">
            <TopBar></TopBar>
                <Loading > 
                </Loading > 
            </div>
        </>
        )
    }
    return <>
    <TopBar></TopBar>
    <div className="px-8">
        <h1 className="mt-8  text-yellow-500 font-extrabold text-4xl">{lieu.name}</h1>
        <p className="mt-4 truncate">Emplacement géographique : {lieu.adress}</p>
        <div className="sm:flex">
    
            <div className=" sm:w-7/12">
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
            <div className="sm:w-5/12 mt-2">
                <p className=""><img src="/landing_bg.jpg" alt="image"/></p>
            </div>
        </div>
        <div className="md:flex mb-16">
            <div className="md:w-1/2 w-full">
                <h3 className=" mt-16 text-pink-700 font-semibold">Avis de tes amis :</h3>
                {lieu.avis.map((avi,i) =>
                    <div key={i} className="mt-2">
                        <Avis avis={avi}></Avis>
                    </div>
                )}
                </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center mt-8">
                <p class ="mx-auto"><img alt="" src="/map.png"/></p>
            </div>
        </div>
        <div className="mb-16">
            <div>
                <h3 className=" mt-16 text-pink-700 font-semibold">Laisser un avis :</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text-area" placeholder="avis" onChange={e => setAvis(e.target.value)} value={avis}></input>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div>  
    </>

}

export default Lieu