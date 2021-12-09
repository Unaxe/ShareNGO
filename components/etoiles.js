export default function Etoiles(props){
    const stars =  []
    for(let i=0;i<Math.floor(props.rate);i++){
        stars.push(<i className="ri-star-fill text-yellow-500 ri-md"></i>)
    }
    for(let i=0;i<5-Math.floor(props.rate);i++){
        stars.push(<i className="ri-star-line text-yellow-500  ri-md"></i>)
    }
    return(<>
        <div className="flex">
            { 
            stars.map((star,i)=>
                <li className="list-none " key={i}>{star}</li>
            )
            }
            <p className="ml-2">{Math.round(props.rate *10 )/10}</p>
        </div>
        
    </>)
}