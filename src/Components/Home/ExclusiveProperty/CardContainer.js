import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const CardContainer = (props) => {
    const classname = props.className;

    let details ='';
    if( props.details){
        details =  props.details;
    }

    let carousel = props.carousel;
    

    return ( 
        <div className={classname}>
            {
                props.properties.map((property,index)=>{
                    const img = require('../../../WebsiteMaterial/living-room.jpg');
                    const personimg = require(`../../../WebsiteMaterial/${property.person}.png`);
                    return(
                        <div className="card-container" key={index}>
                          {
                               carousel ?  
                               <Carousel showThumbs={false} showStatus={false} showArrows={true} showIndicators={false}>
                                    {
                                        property.images.map((image,index) =>{
                                        const imagename = require(`../../../WebsiteMaterial/${image}`);
                                        return(
                                            <div  key={index}>
                                                    <img src={imagename.default} alt={image.alter}/>
                                            </div>
                                            )      
                                        })
                                    }
                               </Carousel> 
                               : <Link to="/property-details"> <img src={img.default} alt="living-room" /></Link>
                           }
                           <Link to="/property-details" style={{textDecoration:'none',color:'black'}}>
                            <div className={`room-details ${details}`}>
                                <span>{property.name}</span>
                                <span>&#8377;{property.amount}</span>
                                <span><span><i className="fas fa-map-marker-alt"></i>{property.location}</span></span>
                                <span>{property.type}</span>
                                <span><img src={personimg.default} alt={property.alter} /></span>
                            </div></Link> 
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default CardContainer;