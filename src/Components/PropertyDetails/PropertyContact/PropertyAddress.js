import location from '../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/location.png';
import food from '../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/food.png';
const PropertyAddress = () => {
    return ( 
        <div className="propertyAddContainer">
            <div className="property-address">
                <p>QS200132</p>
                <div>
                    <img src={location} alt="location" />
                    <p>House no. 2889, Near shemrock school, Sector 69, Mohali</p>
                </div>
                <div>
                    <img src={food} alt="food" />
                    <p>Food is optional @ ₹5000/month</p>
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