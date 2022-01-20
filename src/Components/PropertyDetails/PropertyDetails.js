import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import Facilities from "./Facilities";
import Neighbourhood from "./Neighbourhood";
import AboutProperty from "./AboutProperty";
import PropertyCarousel from "./PropertyCarousel";
import PropertyContact from "./PropertyContact/PropertyContact";
const PropertyDetails = (props) => {

    console.log(props.propDetails)
    console.log(props.userProfile)

    let imagesarr;
    let facilities;
    let neighbourhoods;

    if(props.propDetails){
        imagesarr = props.propDetails.images;
        facilities = props.propDetails.facilities;
        neighbourhoods = props.propDetails.nearByLocation
    }

    
 
    return ( 
        <MainSub  searchedProperties={props.searchedProperties} user={props.user}>
            {props.propDetails && <div className="property-details">
                <div className="details1">
                        <PropertyCarousel images={imagesarr}/>
                        <PropertyContact propDetails={props.propDetails}/> 
                        <Facilities facilities={facilities}/>
                        <Neighbourhood neighbourhoods={neighbourhoods}/>
                        <AboutProperty propDetails={props.propDetails}/>
                </div>
                <div className="details2">
                         <PropertyContact propDetails={props.propDetails} userProfile={props.userProfile}/>   
                </div>
            </div>}
            <Locations/>
        </MainSub>
     );
}
 
export default PropertyDetails;