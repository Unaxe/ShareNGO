export default function MiniAvis(props){
    if(!props.avis){
        return<></>
    }
    return<>
        <div className="bg-gray-300 w-full p-1">
            <p className="font-bold">{ props.avis.name }:</p>
            <p className="mt-4 line-clamp-2">{ props.avis.content }</p>
        </div>
    </>
}