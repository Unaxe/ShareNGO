import TopBar from "../components/topbar"
import { addLieu } from "../utils/lieus";
import { useState } from "react";

export default function AddLieu() {

    const [name, setName] = useState("");
    const [adress, setAdress] = useState("");
    const [cost, setCost] = useState("");
    const [type, setType] = useState("");
    const [rate, setRate] = useState("");
    const [image, setimage] = useState("")
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = {
            name: name,
            adress: adress,
            cost:cost,
            type:type,
            rate:rate
        };
        addLieu(form)
    }
    
    return (
        <>
            <TopBar></TopBar>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-yellow-500 text-center text-xl">Création d'un Lieu</h1>
                <div className="bg-indigo-400 p-2 rounded-md w-2/3">
                    <form id="addLieu" className="flex flex-col" onSubmit={handleSubmit}>
                        <label for="name" className="text-white mb-2 mt-2">Nom du lieu:</label>
                        <input type="text" className="border-2 p-1 border-black rounded-md mx-4 " name="name" placeholder="Nom du Lieu" onChange={e => setName(e.target.value)} value={name}></input>
                        <label for="address" className="text-white mb-2 mt-2">Adresse du Lieu:</label>
                        <input type="text" className="border-2 p-1 border-black rounded-md mx-4 " name="address" placeholder="Adresse du Lieu" onChange={e => setAdress(e.target.value)} value={adress}></input>
                        <div className="flex">
                            <div className="flex flex-col mr-8">
                                <label for="rate" className="text-white mb-2 mt-2">Note Du Lieu:</label>
                                <select type="text" className="border-2 p-1 border-black rounded-md mx-4 " name="rate" placeholder="Note du Lieu" onChange={e => setRate(e.target.value)} value={rate}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label for="cost" className="text-white mb-2 mt-2">Prix Moyen:</label>
                                <input type="number" className="border-2 p-1 border-black rounded-md mx-4 " name="cost" placeholder="Prix moyen" onChange={e => setCost(e.target.value)} value={cost}></input>
                            </div>
                        </div>
                        <label for="type" className="text-white mb-2 mt-2">Type de Lieu:</label>
                        <input type="text" className="border-2 p-1 border-black rounded-md mx-4 " name="type" placeholder="Type du Lieu" onChange={e => setType(e.target.value)} value={type}></input>
                        <label for="image" className="text-white mb-2 mt-2">Lien de l'Image:</label>
                        <input type="text" className="border-2 p-1 border-black rounded-md mx-4 mb-4 " name="image" placeholder="Lien de l'Image du lieu" onChange={e => setimage(e.target.value)} value={image}></input>
                        <button className="p-1 bg-gray-200 rounded-md">Ajouter le lieu</button>
                    </form> 
                </div>
            </div>
        </>
    )
    
}