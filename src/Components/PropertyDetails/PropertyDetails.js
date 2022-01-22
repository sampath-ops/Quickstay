import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import Facilities from "./Facilities";
import Neighbourhood from "./Neighbourhood";
import AboutProperty from "./AboutProperty";
import PropertyCarousel from "./PropertyCarousel";
import PropertyContact from "./PropertyContact/PropertyContact";
import { useParams } from "react-router";
import {db} from "../../firebase.config";
import {doc,getDoc} from "firebase/firestore";
import { useState } from "react";
const PropertyDetails = (props) => {

    const [propDetails,setPropDetails] = useState();

    let imagesarr;
    let facilities;
    let neighbourhoods;

    const {id} = useParams();

    const getPropDetails = async()=>{
        const docref = doc(db,"properties",id);
        const document = await getDoc(docref);
        setPropDetails(document.data());
    }

    if(!propDetails){
        getPropDetails();
    }

    if(propDetails){
        imagesarr = propDetails.images;
        facilities = propDetails.facilities;
        neighbourhoods = propDetails.nearByLocation
    }
 
    return ( 
        <MainSub  searchedProperties={props.searchedProperties} user={props.user}>
            {propDetails && <div className="property-details">
                <div className="details1">
                        <PropertyCarousel images={imagesarr}/>
                        <PropertyContact propDetails={propDetails}/> 
                        <Facilities facilities={facilities}/>
                        <Neighbourhood neighbourhoods={neighbourhoods}/>
                        <AboutProperty propDetails={propDetails}/>
                </div>
                <div className="details2">
                         <PropertyContact propDetails={propDetails}/>   
                </div>
            </div>}
            <Locations/>
        </MainSub>
     );
}
 
export default PropertyDetails;