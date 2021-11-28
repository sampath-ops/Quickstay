import './Card.css';
const Card = () => {

    const properties = [
        {
            id:0,
            name:'Private Room',
            amount:6500,
            location:"Sec 22, Chandigarh",
            type:"Fully-Furnished"
        },
        {
            id:1,
            name:'PG',
            amount:5000,
            location:"Sec 46, Salem",
            type:"Fully-Furnished"
        },
        {
            id:2,
            name:'Single Room',
            amount:8500,
            location:"VIP road, Chandigarh",
            type:"Fully-Furnished"
        },
    ]

    return ( 
        <div className="card">
            {
                properties.map(property=>{
                    const img = require('../../WebsiteMaterial/living-room.jpg');
                    return(
                        <div className="card-container" key={property.id}>
                            <img src={img.default} alt="living-room" />
                            <div className="room-details">
                                <span>{property.name}</span>
                                <span>&#8377;{property.amount}</span>
                                <span><i className="fas fa-map-marker-alt"></i>{property.location}</span>
                                <span>{property.type}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Card;