export default function MiniAvis(props){
    if(!props.avis){
        return<></>
    }
    return<>
        <div className="bg-gray-100 border-2 border-gray-300  rounded-md w-full p-1">
            <p className="font-bold">{ props.avis.name }:</p>
            <p className="mt-4 line-clamp-2">{ props.avis.content }</p>
        </div>
    </>
}