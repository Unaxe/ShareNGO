import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Avis from "../../components/avis"
import Etoiles from "../../components/etoiles"
import Loading from "../../components/loading"
import TopBar from "../../components/topbar"
import { getLieu,addRate } from "../../utils/lieus"
import RateStar from "../../components/rateStars"

import { onAuthStateChanged,getAuth } from "@firebase/auth"
import { getUser } from "../../utils/auth"

const Lieu = () => {


    const router = useRouter()
    const { pid } = router.query
    const [lieu,setLieu] = useState("");
    const [avis,setAvis] = useState("");
    const [rate, setRate] = useState(0);
    const [username, setusername] = useState("")
    

    const auth = getAuth()
    onAuthStateChanged(auth,user => {
        if(user){
            getUser(user).then( a =>{
            setusername(a.pseudo)
            })
        }
    })

    useEffect(async () => {
        setLieu(await getLieu(pid))
        }
    ,[])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = {
            avis: {
                    content: avis,
                    name: username,
                },
            rates: parseInt(rate)
        };
        addRate(pid,form);
        console.log(form);
        setLieu({...lieu,avis:form.avis,rates:form.rates});
    }

    function getMoyenne(array){
        let s = 0;
        for(let i=0;i<array.length;i++){
            s+=array[i];
        }
        s /= array.length;
        return s;
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
                    Object.keys(lieu.rates).map((rate,key) => 
                        <div className="flex" key={key}>
                            <p className="capitalize">{rate} : </p>
                            <div className="ml-2">
                                <Etoiles rate={getMoyenne(lieu.rates[rate])}></Etoiles>
                            </div>
                        </div>
                    )
                }
                
                <p>Prix moyen : <span className="font-bold">{lieu.cost}€</span></p>
                <p>Type : <span className="font-bold">{lieu.type}</span></p>
            </div>
            <div className="sm:w-5/12 mt-2">
                <p className=""><img src={lieu.image} alt="image"/></p>
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
                    <RateStar rate={rate} setRate={setRate}></RateStar>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div>  
    </>

}

export default Lieu