import Avis from "../components/avis"

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
        <div className="flex mb-16">
            <div className="w-1/2 ml-4">
                <h3 className=" mt-16 text-pink-700 font-semibold">Avis de tes amis :</h3>
                {avis.map((avi) => 
                    <div className="mt-2">
                        <Avis avis={avi}></Avis>
                    </div>
                )}
                </div>
            <div className="w-1/2"></div>
        </div>
    </>
}