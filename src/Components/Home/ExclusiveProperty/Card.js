import './Card.css';
const Card = () => {

    const properties = [
        {
            id:0,
            name:'Private Room',
            amount:6500,
            location:"Sec 22, Chandigarh",
            type:"Fully-Furnished",
            person:"Male",
            alter:"male"
        },
        {
            id:1,
            name:'PG',
            amount:5000,
            location:"Sec 46, Salem",
            type:"Fully-Furnished",
            person:"Female",
            alter:"female"
        },
        {
            id:2,
            name:'Single Room',
            amount:8500,
            location:"VIP road, Chandigarh",
            type:"Fully-Furnished",
            person:"Unisex",
            alter:"unisex"
        },
    ]

    return ( 
        <div className="card">
            {
                properties.map(property=>{
                    const img = require('../../../WebsiteMaterial/living-room.jpg');
                    const personimg = require(`../../../WebsiteMaterial/${property.person}.png`);
                    return(
                        <div className="card-container" key={property.id}>
                            <img src={img.default} alt="living-room" />
                            <div className="room-details">
                                <span>{property.name}</span>
                                <span>&#8377;{property.amount}</span>
                                <span><span><i className="fas fa-map-marker-alt"></i>{property.location}</span></span>
                                <span>{property.type}</span>
                                <span><img src={personimg.default} alt={property.alter} /></span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Card;