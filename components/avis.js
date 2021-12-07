export default function Avis(props){
    if(!props.avis){
        return<></>
    }
    return<>
        <div className="bg-gray-300 w-full">
            <p className="font-bold capitalize">{ props.avis.name }:</p>
            <p className="mt-2">{ props.avis.content }</p>
        </div>
    </>
}