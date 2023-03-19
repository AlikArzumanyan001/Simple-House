import './style.css';
import User from '../../components/user/index';
import { useState } from 'react';
import user01 from '../../assets/image/user01.jpg';
import user02 from '../../assets/image/user02.jpg';
import user03 from '../../assets/image/user03.jpg';
import user04 from '../../assets/image/user04.jpg';
import parallax from '../../assets/image/parallax.jpg';
import chef from '../../assets/image/chef.jpg'
import Info from '../../components/about info';

function About(){
    const [user,setUser] = useState(
        [
            {
                id:1,
                img:user01,
                name:"Jennifer Soft",
                specialist:"Founder and CEO",
                info:"Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
                icons:["icon-facebook2","icon-twitter","icon-instagram",]
            },
            {
                id:2,
                img:user02,
                name:"Daisy Walker",
                specialist:"Executive Chef",
                info:"Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
                icons:["icon-facebook2","icon-twitter",]
            },
            {
                id:3,
                img:user03,
                name:"Florence Nelson",
                specialist:"Kitchen Manager",
                info:"Aenean sapien sem, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
                icons:["icon-facebook2","icon-instagram",]
            },
            {
                id:4,
                img:user04,
                name:"Valentina Martin",
                specialist:"Culinary Director",
                info:"Praesent non vulputate elit. Orci varius natoque penatibus et magnis, nascetur ridiculus mus.",
                icons:["icon-facebook2","icon-twitter", "icon-instagram","icon-youtube",]
            },
        ]
    )
        const [info,setinfo] = useState(
            [
                {
                    id:1,
                    icon:"icon-fire",
                    text:"Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.",
                    color:"#2D99CC",
                },
                {
                    id:2,
                    icon:"icon-leaf",
                    text:"Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.",
                    color:"#319966",
                },
                {
                    id:3,
                    icon:"icon-glass",
                    text:"Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.",
                    color:"#993332",
                },
            ]
        )
    return(
        <div className='G-container about-container'>
            <div className='about-name-cont'>
                <h1 className='about-name'>About Simple House</h1>
                <p className='about-text'>This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.</p>
            </div>
            <div className='about-cont-aftors'>
                {user.map(el => <User key={el.id} item={el}/>)}
            </div>
            <div className='about-parallax' style={{backgroundImage:`url('${parallax}')`}}/>
            <div className='G-container about-info-cont'>
                {info.map(el => <Info key={el.id} item={el}/>)}
            </div>
            <div className='about-chef-cont'>
                <div className='chef-img' style={{backgroundImage:`url('${chef}')`}}/>
                <div className='chef-cont-info'>
                    <h2 className='chef-info-name'>History of our restaurant</h2>
                    <p className='chef-text'>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
                    <p className='chef-text2'>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you.</p>
                </div>
            </div>
        </div>
    )
}

export default About