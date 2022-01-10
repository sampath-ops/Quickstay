import { Carousel } from "react-responsive-carousel";
import './PropertyCarousel.css';
const PropertyCarousel = (props) => {

    return ( 
        <Carousel showThumbs={false} showStatus={false} showArrows={true} showIndicators={true} className="property-carousle">
        {
            props.images.map((image,index) =>{
            return(
                <div className="property-details-images" key={index}>
                        <img src={image} alt="property-images"/>
                </div>
                )      
            })
        }
        </Carousel> 
     );
}
 
export default PropertyCarousel;