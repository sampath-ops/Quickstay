import './Card.css';
import CardContainer from './CardContainer';

const Card = (props) => {

    // const ExclusiveProperties = [
    //     {
    //         name:'Private Room',
    //         amount:6500,
    //         location:"Sec 22, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Male",
    //         alter:"male"
    //     },
    //     {
    //         name:'PG',
    //         amount:5000,
    //         location:"Sec 46, Salem",
    //         type:"Fully-Furnished",
    //         person:"Female",
    //         alter:"female"
    //     },
    //     {
    //         name:'Single Room',
    //         amount:8500,
    //         location:"VIP road, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Unisex",
    //         alter:"unisex"
    //     },
    // ]
    
    return ( 
        <div className="card">   
                {props.properties.length > 0 && <CardContainer properties ={props.properties} className="row"/>}
        </div>
     );
}
 
export default Card;