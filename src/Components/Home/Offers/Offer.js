import './Offer.css';
import { Link } from 'react-router-dom';
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
                        <Link to="/choose-plan"  key={image.id}>
                            <div>
                                <img src={imagename.default} alt={image.alter}/>
                            </div>
                        </Link>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Offer;