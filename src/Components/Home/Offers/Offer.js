import './Offer.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Offer = () => {
    const offerimages = [
        {
            id:0,
            name:'2',
            alter:'quick verified'
        },
        {
            id:1,
            name:'5',
            alter:'diwali offer'
        },
        {
            id:2,
            name:'3',
            alter:'tension free'
        },
    ]
    return ( 
        <div className="offer">
            <div>
                {
                    offerimages.map(image =>{
                        const imagename = require('../../../WebsiteMaterial/'+ image.name + '.png');
                        return(
                        <div  key={image.id}>
                                <img src={imagename.default} alt={image.alter}/>
                        </div>
                        )
                    })
                }
            </div>
            <Carousel showThumbs={false} showStatus={false} showArrows={false} showIndicators={false}>
            {
                offerimages.map(image =>{
                    const imagename = require('../../../WebsiteMaterial/'+ image.name + '.png');
                    return(
                       <div  key={image.id}>
                            <img src={imagename.default} alt={image.alter}/>
                       </div>
                    )
                })
            }
            </Carousel>
        </div>
     );
}
 
export default Offer;