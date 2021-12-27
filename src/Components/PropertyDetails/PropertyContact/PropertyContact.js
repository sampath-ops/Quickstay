import './PropertyContact.css';
import PropertyAddress from './PropertyAddress';
import PropertySharing from './PropertySharing';
import ContactButton from './ContactButton'
const PropertyContact = () => {
    return ( 
        <div className="propertycontact">
           <PropertyAddress/>
           <PropertySharing/>
           <ContactButton/>
        </div>
     );
}
 
export default PropertyContact;