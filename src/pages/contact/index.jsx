import { useState } from 'react';
import Faqs from '../../components/faqs';
import './style.css';


function Contact(){
    const [faqs,setfaqs] = useState(
        [
            {
                id:1,
                name:"1. Fusce eu lorem et dui #09C maximus varius?",
                text:"#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat."
            },
            {
                id:2,
                name:"2. Vestibulum #999 ante ipsum primis in faucibus orci?",
                text:"Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta."
            },
            {
                id:3,
                name:"3. Can I redistribute this template as a ZIP file?",
                text:"Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you."
            },
            {
                id:4,
                name:"4. Ut ac erat sit amet neque efficitur faucibus et in lectus?",
                text:"Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim."
            },
        ]
    )
    return(
        <div className='G-container contact-container'>
            <div className='contact-cont-name'>
                <h1 className='cont-name'>Contact Page</h1>
                <p className='cont-text'>You may use <a href="https://www.ltcclock.com/downloads/simple-contact-form/">Simple Contact Form</a> to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.</p>
            </div>
            <div className='contact-block-cont'>
                <div className='contact-sign'>
                    <input type="text" className='contact-inp-name' placeholder='Name'/>
                    <input type="text" className='contact-inp-email' placeholder='Email'/>
                    <textarea cols="30" rows="5" className='contact-inp-message' placeholder='Message'/> 
                    <button className='contact-inp-btn'>Send</button>
                </div>
                <div className='contact-our-address'>
                    <h2 className='contact-address-name'>Our Address</h2>
                    <p className='contact-address-text'>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                    <div className='contact-telephon'>
                        <i className='icon-phone'/>
                        <p className='telephon'>080-090-0110</p>
                    </div>
                    <div className='contact-sms'>
                        <i className='icon-envelope-o'/>
                        <p className='sms'>info@company.co</p>
                    </div>
                    <p>
                        <i className='aftors-icon icon-facebook2'/>
                        <i className='aftors-icon icon-twitter'/>
                        <i className='aftors-icon icon-instagram'/>
                   </p>
                </div>
            </div>
            <div className='contact-map'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d195223.62322320972!2d43.999311750000004!3d40.134061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2s!4v1674127055593!5m2!1shy!2s"/>
            </div>
            <div> {/* contact faqs */}
                <h1 className='faqs'>FAQs</h1>
                <p className='faqs-text'>This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666</p>
            </div>
            <div className='contact-faqs'>
                {faqs.map(el => <Faqs key={el.id} item={el}/>)}
            </div>
        </div>
    )
}
export default Contact
