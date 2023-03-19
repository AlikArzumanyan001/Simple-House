import './style.css';

function Food(props){
    let item = props.item
    return(
        <div className="food-cont-block"> 
            <div className="food-img" style={{backgroundImage:`url('${item.img}')`}}/>
            <h3 className="food-name">{item.name}</h3>
            <p className="food-text">{item.text}</p>
            <h3 className='food-money'>{item.money}</h3>
        </div>
    )
}
export default Food
