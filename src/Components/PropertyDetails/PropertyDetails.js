import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import Facilities from "./Facilities";
import Neighbourhood from "./Neighbourhood";
import AboutProperty from "./AboutProperty";
import PropertyCarousel from "./PropertyCarousel";
import PropertyContact from "./PropertyContact/PropertyContact";
const PropertyDetails = (props) => {

    // const extract = (obj, ...keys) => {
    //     const newObject = Object.assign({});
    //     Object.keys(obj).forEach((key) => {
    //        if(keys.includes(key)){
    //           newObject[key] = obj[key];
    //           delete obj[key];
    //        };
    //     });
    //     return newObject;
    //  };

    console.log(props.propDetails)

    const imagesarr = props.propDetails.images;
    const facilities = props.propDetails.facilities;
    const neighbourhoods = props.propDetails.nearByLocation
    return ( 
        <MainSub  searchedProperties={props.searchedProperties}>
            <div className="property-details">
                <div className="details1">
                        <PropertyCarousel images={imagesarr}/>
                        <PropertyContact propDetails={props.propDetails}/> 
                        <Facilities facilities={facilities}/>
                        <Neighbourhood neighbourhoods={neighbourhoods}/>
                        <AboutProperty propDetails={props.propDetails}/>
                </div>
                <div className="details2">
                         <PropertyContact propDetails={props.propDetails}/>   
                </div>
            </div>
            <Locations/>
        </MainSub>
     );
}
 
export default PropertyDetails;