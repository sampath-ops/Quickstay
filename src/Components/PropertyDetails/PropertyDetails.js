import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import Facilities from "./Facilities";
import Neighbourhood from "./Neighbourhood";
import AboutProperty from "./AboutProperty";
import PropertyCarousel from "./PropertyCarousel";
import PropertyContact from "./PropertyContact/PropertyContact";
const PropertyDetails = () => {
    return ( 
        <MainSub>
            <div className="property-details">
                <div className="details1">
                        <PropertyCarousel/>
                        <PropertyContact/> 
                        <Facilities/>
                        <Neighbourhood/>
                        <AboutProperty/>
                </div>
                <div className="details2">
                         <PropertyContact/>   
                </div>
            </div>
            <Locations/>
        </MainSub>
     );
}
 
export default PropertyDetails;