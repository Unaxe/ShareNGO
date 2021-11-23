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

export { getLieus , getLieu}