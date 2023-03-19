import './style.css';
import '../../components/food/index';
import { useState } from 'react';
import img from '../../assets//image/01.jpg';
import img2 from '../../assets//image/02.jpg';
import img3 from '../../assets//image/03.jpg';
import img4 from '../../assets//image/04.jpg';
import img5 from '../../assets//image/05.jpg';
import img6 from '../../assets//image/06.jpg';
import img7 from '../../assets//image/07.jpg';
import img8 from '../../assets//image/08.jpg';
import Food from '../../components/food/index';
import avocado from '../../assets/image/avocado.jpg';

function Block(){
    let [food,setfood] = useState(
        [
            {
                id:1,
                img:img,
                name:"Fusce dictum finibus",
                text:"Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                categoria:"noodle",
                money: "$45 / $55",
            },
            {
                id:2,
                img:img2,
                name:"Aliquam sagittis",
                text:"Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                categoria:"noodle",
                money: "$65 / $70",
            },
            {
                id:3,
                img:img3,
                name:"Sed varius turpis",
                text:"Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                categoria:"pizza",
                money: "$30.50",
            },
            {
                id:4,
                img:img4,
                name:"Aliquam sagittis",
                text:"Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                categoria:"pizza",
                money: "$25.50",
            },
            {
                id:5,
                img:img5,
                name:"Maecenas eget justo",
                text:"Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                categoria:"salad",
                money: "$80.25",
            },
            {
                id:6,
                img:img6,
                name:"Quisque et felis eros",
                text:"Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                categoria:"noodle",
                money: "$20 / $40 / $60",
            },
            {
                id:7,
                img:img7,
                name:"Sed ultricies dui",
                text:"Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                categoria:"salad",
                money: "$94",
            },
            {
                id:8,
                img:img8,
                name:"Donec porta consequat",
                text:"Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                categoria:"salad",
                money: "$15",
            },
        ]
    )
    const [product,setproduct] = useState(food)
    const [active,setactive] = useState(0)
    
    return(
        <div className='G-container block-container'>
            <div className='G-container block-cont'>
                <h1 className='block-simple-name'>Welcome to Simple House</h1>
                <p className='block-simple-text'>Total 3 HTML pages are included in this template.
                    Header image has a parallax effect. You can feel free to download, edit and use this
                    TemplateMo layout for your commercial or non-commercial websites.</p>
            </div>
            <div className='block-food-btn'>
                <a className={`block-btn-salad ${active == 0 ? "block-btn-pizza" : ""}`} onClick={()=>{
                    setproduct(food)
                    setactive(0)
                }}>Pizza</a> 
                <a  className={`block-btn-salad ${active == 1 ? "block-btn-pizza" : ""}`} onClick={()=>{
                    setproduct(food.filter(el => el.categoria == "salad"))
                    setactive(1)
                }}>Salad</a>
                <a  className={`block-btn-salad ${active == 2 ? "block-btn-pizza" : ""}`} onClick={()=>{
                    setproduct(food.filter(el => el.categoria == "noodle"))
                    setactive(2)
                }}>Noodle</a>
                <div>
                    <input type="text" style={{marginTop:"40px", borderRadius:"5px",padding:"10px"}} onChange={(e)=>{
                        setproduct(food.filter(el => el.categoria == e.target.value))
                    }}/>
                </div>
            </div>
            <div className='block-food'>
                {product.map(el => <Food key={el.id} item={el}/>)}
            </div>
            <div className='block-avocado'>
                <div className='block-avocado-img' style={{backgroundImage:`url('${avocado}')`}}/>
                <div className='block-avocado-text'> 
                    <h2 className='block-avocado-name'>Maecenas nulla neque</h2>
                    <h4 className='block-text-avo'>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</h4>
                </div>
                <button className='block-avocado-btn'>Read More</button>
            </div>
        </div>
        
    )
}

export default Block