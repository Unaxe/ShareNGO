import Etoiles from "./etoiles"
import Avis from "./avis"

export default function MiniLieu(){
    const aha = {
        name : "Marco ",
        content : "J'ai aimé;"
    }
    return(
        <>
        <div className="flex h-64">

            <div className="w-1/2 border-r-2"> 
                image
            </div>

            <div className="w-1/2">
                <div className="border-b-2 border-black pb-2">
                    <h2 className="text-yellow-500 font-bold text-3xl">
                        Sequoia Roof Top Bar
                    </h2>
                    <Etoiles rate="4.5">  </Etoiles>
                    <p>
                        4 amis ont commenté
                    </p>
                    <p>
                        Prix moyen : 30$
                    </p>
                </div>
                <div className="p-2"><Avis avis={aha} ></Avis></div>
            </div>



        </div>
        </>
    )
}