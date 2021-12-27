import { Carousel } from "react-responsive-carousel";
import './PropertyCarousel.css';
const PropertyCarousel = () => {

    const images = ["living-room","living-room","living-room"];
    return ( 
        <Carousel showThumbs={false} showStatus={false} showArrows={true} showIndicators={true} className="property-carousle">
        {
            images.map((image,index) =>{
            const imagename = require(`../../WebsiteMaterial/${image}.jpg`);
            return(
                <div  key={index}>
                        <img src={imagename.default} alt={image}/>
                </div>
                )      
            })
        }
        </Carousel> 
     );
}
 
export default PropertyCarousel;