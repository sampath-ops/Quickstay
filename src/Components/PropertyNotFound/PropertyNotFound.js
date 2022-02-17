import "./PropertyNotFound.css";
import notFound from "../../WebsiteMaterial/PropertyNotFound/PropertyNotFound.svg";
import {Link} from "react-router-dom";
const PropertyNotFound = () => {
    return ( 
        <div className="property_not_found_container">
            <h2>Property <br /> Not found!</h2>
            <div className="property_not_found">
                <img src={notFound} alt="property-not-found" />
                <p className="we_are_sorry">We’re sorry, no property found in this area right now.</p>
                <p className="we_are_sorry">Hold tight, We’ll be available soon!</p>
                <div className="go_home"><Link to="/"><button>GO HOME</button></Link></div>
            </div>
        </div>
     );
}
 
export default PropertyNotFound;