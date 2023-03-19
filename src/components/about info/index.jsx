import './style.css';

function Info(props){
    const item = props.item;
    return(
        <div>
            <div className='about-info-menu'>
                <i className={item.icon}></i>
                <p className='info-text'>{item.text}</p>
                <button className="info-btn" style={{backgroundColor:`${item.color}`}}>Read More</button>
            </div>
            
        </div>
    )
}
export default Info