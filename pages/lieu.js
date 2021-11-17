import Avis from "../components/avis"
import Etoiles from "../components/etoiles"

export default function Lieu(){

    const avis = [
        {
            name: 'Marco-Naji Serhal',
            content: "Une très belle adresse pour prendre un verre dans un cadre idyllique et avec une vue panoramique époustouflante sur Paris. L’accueil est sympathique, le service de qualité, la carte variée avec peut être des tarifs un peu élevés. Merci à l’équipe pour ce beau moment de chill 😉"
        },
        {
            name: "Mathis Pappo",
            content: "De loin le meilleur restaurant de Paris !!!!! Il était incroyable, la décoration était exceptionnelle, la vaisselle, la terrasse, les escaliers, les serveurs !!! Parfait ! Plats succulents servis rapidement et rapport qualité prix plus que correct ! Pensez à réserver bien en avance, je recommande 1000 fois et je reviendrai !!!"
        }
    ]


    return <>
    <div className="px-8">
        <h1 className="mt-8  text-yellow-500 font-extrabold text-4xl">Sequoia, Rooftop Bar</h1>
        <p className="mt-4 truncate">Emplacement géographique : 27/29 Bd des Capucines</p>
        <div className="flex">
    
            <div className=" w-5/12">
                <div className="flex">
                    <p>Ambiance : </p>
                    <div className="ml-2">
                        <Etoiles rate="3.6"></Etoiles>
                    </div>
                </div>
                <p>Prix moyen : <span className="font-bold">30€</span></p>
                <p>Type : <span className="font-bold">Bar</span></p>
                <div className="flex">
                    <p>Service : </p>
                    <div className="ml-2">
                        <Etoiles rate="4.2"></Etoiles>
                    </div>
                </div>
            </div>
            <div className="w-7/12 mt-2">
                <p className=""><img src="/landing_bg.jpg" alt="image"/></p>
            </div>
        </div>
        <div className="md:flex mb-16">
            <div className="md:w-1/2">
                <h3 className=" mt-16 text-pink-700 font-semibold">Avis de tes amis :</h3>
                {avis.map((avi,i) =>
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