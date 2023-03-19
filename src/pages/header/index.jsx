import './style.css';
import simple from '../../assets/image/simple.jpg';
import { NavLink } from 'react-router-dom';


function Header(){
    return(
        <div className='G-container header-cont-img' style={{backgroundImage:`url('${simple}')`}}>
            <div className='navbar-container'>
                <div className='block'></div>
                <div className='one'></div>
                <div className='bleck'></div>
                <h1 className='bar-text'>Simple House</h1>
                <br />
                <h3 className='bar-text2'>new restaurant template</h3>
            </div>
            <div className='navbar-link-cont'>
                <a><NavLink className={"nav-home"} to={"/"}>Home</NavLink></a>
                <a><NavLink className={"nav-about"} to={"/about"}>About</NavLink></a>
                <a><NavLink className={"nav-about"} to={"/contact"}>Contact</NavLink></a>
            </div>
        </div>
    )
}

export default Header