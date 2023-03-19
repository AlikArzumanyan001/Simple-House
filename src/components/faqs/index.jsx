import { useState } from 'react';
import './style.css';

function Faqs(props){
    const item = props.item;
    const [btn,setbtn] = useState(false);
    
    return(
        <div>
            <h1 className='faqs-cont-btn' onClick={()=>{
                setbtn(!btn)
            }}>{item.name}</h1>
            <p className={`faqs-p-btn ${btn ? "faqs-p-text-btn" : "faqs-p-btn"}`}>{item.text}</p>
            
        </div>
    )
}
export default Faqs

