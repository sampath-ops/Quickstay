import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import Facilities from "./Facilities";
import Neighbourhood from "./Neighbourhood";
import AboutProperty from "./AboutProperty";
const PropertyDetails = () => {
    return ( 
        <MainSub>
            <div className="property-details">
                <div className="details1">
                        <Facilities/>
                        <Neighbourhood/>
                        <AboutProperty/>
                </div>
                <div className="details2">

                </div>
            </div>
            <Locations/>
        </MainSub>
     );
}
 
export default PropertyDetails;