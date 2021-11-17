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

    const lieu = {
        avis : avis,
        title : "Sequoia, Rooftop Bar",
        emplacement: "27/29 Bd des Capucines",
        rates: [
            {
                title:"Ambiance",
                rate: 3.6
            },
            {
                title:"Service",
                rate: 4.2
            }
        ],
        cost:30,
        type: "Bar"
    }


    return <>
    <div className="px-8">
        <h1 className="mt-8  text-yellow-500 font-extrabold text-4xl">{lieu.title}</h1>
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