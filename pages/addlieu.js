import TopBar from "../components/topbar"
import { addLieu } from "../utils/lieus";
import { useState } from "react";

export default function AddLieu() {

    const [name, setName] = useState(null);
    const [adress, setAdress] = useState(null);
    const [cost, setCost] = useState(null);
    const [type, setType] = useState(null);
    const [rate, setRate] = useState(null);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = {
            name: name,
            adress: adress,
            cost:cost,
            type:type,
            rate:rate
        };
        addLieu(form);
    }

    return (
        <>
            <TopBar></TopBar>
            <div>
                <form id="addLieu" onSubmit={handleSubmit}>
                    
                    <input type="text" name="name" placeholder="Nom du Lieu" onChange={e => setName(e.target.value)} value={name}></input>
                    <input type="text" name="address" placeholder="Adresse du Lieu" onChange={e => setAdress(e.target.value)} value={adress}></input>
                    <input type="text" name="rate" placeholder="Note du Lieu" onChange={e => setRate(e.target.value)} value={rate}></input>
                    <input type="text" name="cost" placeholder="Prix moyen" onChange={e => setCost(e.target.value)} value={cost}></input>
                    <input type="text" name="type" placeholder=" type du Lieu" onChange={e => setType(e.target.value)} value={type}></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
    
}