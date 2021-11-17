export default function Avis(props){
    return<>
    {console.log(props)}
        <div className="bg-gray-300 w-full">
            <p className="font-bold">{ props.avis.name }:</p>
            <p className="mt-4">{ props.avis.content }</p>
        </div>
    </>
}