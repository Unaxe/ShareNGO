import {useState} from 'react'
export default function RateStar({rate, setRate}){
    const [real, setReal] = useState([0,0,0,0,0])
    const [stars,setStars] = useState(real)
    
    function highlight(key) {
        const s = [0,0,0,0,0]
        for(let i = 0;i<=key;i++){
            s[i]=1
        }
        setStars(s);
    }
    function disHighlight() {
        setStars(real);
    }

    function rating(key) {
        const s = [0,0,0,0,0]
        for(let i = 0;i<=key;i++){
            s[i]=1
        }
        setStars(s);
        setReal(s);
        setRate(key+1);
    }

    return(<>
        <div className="flex">
            { 
            stars.map((star,i)=>
                <li className="list-none" key={i} >
                    <i className={star==0 ? "ri-star-line text-yellow-500 ri-sm":"ri-star-fill text-yellow-500 ri-sm"} onClick={() => rating(i)} onMouseEnter={() => highlight(i)} onMouseLeave={disHighlight} key={i}/>
                </li>
            )
            }
        </div>
    </>)
}