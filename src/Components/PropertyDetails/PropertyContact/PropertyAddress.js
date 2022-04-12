import location from '../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/your-location.png';
import food from '../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/food.png';
const PropertyAddress = (props) => {
  
    return ( 
        <div className="propertyAddContainer">
            <div className="property-address">
                <p>{props.propDetails.propertyCode}</p>
                <div>
                    <img src={location} alt="location" />
                    <p>{props.propDetails.propertyFullAddress}</p>
                </div>
                <div>
                    <img src={food} alt="food" />
                    <p>{props.propDetails.food}</p>
                </div>
            </div>
            <div className="shar-fav">
                <i className="fas fa-share-alt"></i>
                <i className="fas fa-heart"></i>
            </div>
        </div>
     );
}
 
export default PropertyAddress;