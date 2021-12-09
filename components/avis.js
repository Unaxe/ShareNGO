export default function Avis(props){
    if(!props.avis){
        return<></>
    }
    return<>
        <div className="bg-gray-100 border-2 border-gray-300  rounded-md p-1 w-full">
            <p className="font-bold capitalize">{ props.avis.name }:</p>
            <p className="mt-2 text-justify">{ props.avis.content }</p>
        </div>
    </>
}