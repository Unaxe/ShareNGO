import Etoiles from "./etoiles"
import MiniAvis from "./miniavis"

export default function MiniLieu(props){

    function getMoyenne(array){
        let s = 0;
        for(let i=0;i<array.length;i++){
            s+=array[i];
        }
        s /= array.length;
        return s;
    } 

    return(
        <>
        <div className="md:flex">

            <div className="md:w-1/3 w-full"> 
                <div className="my-auto flex align-middle align-center"><img src="/landing_bg.jpg" alt=""></img></div>
            </div>

            <div className="md:w-2/3 mb-2">
                <div className="border-b-2 border-black pb-2 px-2">
                    <h2 className="text-center text-yellow-500 font-bold text-3xl">
                        {props.lieu.name}
                    </h2>
                    <Etoiles rate={getMoyenne(props.lieu.rates.moyenne)}>  </Etoiles>
                    <p>
                        {props.lieu.adress}
                    </p>
                    <p>
                        {props.lieu.avis.length} amis ont commenté
                    </p>
                    <p>
                        Prix moyen : {props.lieu.cost[0]}€
                    </p>
                </div>
                {(props.lieu.avis.length > 0) && <div className="p-2"><MiniAvis avis={props.lieu.avis[0]} ></MiniAvis></div>
                }
            </div>
        </div>
        </>
    )
}