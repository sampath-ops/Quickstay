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
                    
                    // is there any not approved property
                    if(property.options.length < 1){
                        console.log(property);
                    }

                    const addressarr = property.propertyFullAddress.split(",");
                    let address = addressarr.slice(1,3);
                    if(addressarr.length <= 4){
                        address = addressarr.slice(0,2);
                    }
                    if(addressarr.length === 6){
                        address = addressarr.slice(2,4);
                    }

                    const personimg = require(`../../../WebsiteMaterial/CardDetailsImages/${property.propertyFor}.png`);

                    return(
                        <div className="card-container" key={index}>
                          {
                               carousel ?  
                               <Carousel showThumbs={false} showStatus={false} showArrows={true} showIndicators={false}>
                                    {
                                        property.images.map((image,index) =>{
                                        return(
                                            <div  key={index}>
                                                    <img src={image} alt={property.furnishingStatus} style={{height:"175px",objectFit:"cover"}}/>
                                            </div>
                                            )      
                                        })
                                    }
                               </Carousel> 
                               : <Link to={`/property-details/${property.listingId}`}> <img src={property.images[1]} alt={property.furnishingStatus}/></Link>
                           }
                           <Link to={`/property-details/${property.listingId}`} style={{textDecoration:'none',color:'black',position:'relative'}}>
                            <div className={`room-details ${details}`}>
                                <span>{property.options[0].name}</span>
                                <span>&#8377; {property.options[0].price}</span>
                                <span><span><i className="fas fa-map-marker-alt"></i><p>{address.toString()}</p></span></span>
                                <span>{property.furnishingStatus}</span>
                                <span><img src={personimg.default} alt={property.alter} /></span>
                            </div>
                            {props.showDistance && <p className='distance'>{property.distance} KM</p>}
                            </Link> 
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default CardContainer;