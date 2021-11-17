import Avis from "../components/avis"

export default function Lieu(){

    return <>
        <h1 className="mt-8 ml-4 text-yellow-500 font-extrabold text-4xl">Sequoia, Rooftop Bar</h1>
        <p className="mt-4 ml-4 truncate">Emplacement géographique : 27/29 Bd des Capucines</p>
        <div className="flex">
            <div className="ml-4 w-1/3">
                <p>Ambiance : E E E E E</p>
                <p>Prix moyen : <span className="font-bold">30€</span></p>
                <p>Type : <span className="font-bold">Bar</span></p>
                <p>Service : E E E E E</p>
            </div>
            <div className="w-2/3 mt-2">
                <p className="mr-4"><img src="/landing_bg.jpg" alt="image"/></p>
            </div>
        </div>
        <div className="flex">
            <div className="w-1/2 ml-4">
                <h3 className=" mt-16 text-pink-700 font-semibold">Avis de tes amis :</h3>
                <div className="mt-2">
                    <Avis></Avis>
                </div>
                <div className="mt-2 mb-16">
                    <Avis></Avis>
                </div>
            </div>
            <div className="w-1/2"></div>
        </div>
    </>
}