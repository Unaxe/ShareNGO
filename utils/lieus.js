import { firestore } from "./firebase";

const getLieus = async () => {
    const snapshot = await firestore.collection("lieu").get();
    snapshot.docs.forEach((doc) => console.log(doc.data()));
    return snapshot;
};

const getLieu = async (pid) => {
    const snapshot = await firestore.collection("lieu").doc(pid).get();
    return (snapshot.data());
};

const addLieu = async (form) => {
    await firestore.collection("lieu").add({
        name : form.name,
        adress : form.adress,
        rates: {
            moyenne : [parseInt(form.rate)]
        },
        type: form.type,
        avis : [],
        cost: [form.cost]
    })
};

const addRate = async (pid,form) => {
    console.log(form);
    await firestore.collection("lieu").doc(pid).update({
        avis: form.avis,
        rates: form.rates
    })
}
    


export { getLieus , getLieu, addLieu, addRate}