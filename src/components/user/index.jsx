import './style.css';

function User(props){
    let item = props.item
    return(
        <div className='G-container cont-aftors'> 
            <div className='aftors-img-cont'>
                <img src={item.img} className='aftors-img'/>
            </div>
            <div className='aftors-div'>
                <h2 className='aftors-name'>{item.name}</h2>
                <h4 className='aftors-specialist'>{item.specialist}</h4>
                <p className='aftors-info'>{item.info}</p>
                <p>
                    {item.icons.map(el => {
                        return(
                            <i className={`aftors-icon ${el}`}/>
                        )
                    })}
                </p>

            </div>
            
        </div>
    )
}
export default User