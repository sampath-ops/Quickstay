/* eslint-disable */
import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import CardContainer from "../Home/ExclusiveProperty/CardContainer";
import './Filter.css';
import FilterOptions from "./FilterOptions";
import FilterOptionsForMobile from "./FilterOptionForMobile/FilterOptionsForMobile";
import db from '../../firebase.config';
import { useEffect,useState } from 'react';
const Filter = () => {

    const [propertydetails,setPropertyDetails] = useState([]);
    const propertyarr = [];

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

    const fetchProperties = async()=>{
        const response = db.collection('properties');
        const data = await response.get();
        data.docs.forEach(item =>{
            if('images' in item.data()){
                const images = item.data().images;
                if(images.length > 0){
                    propertyarr.push(item.data());
                } 
            }       
        })
        setPropertyDetails(propertyarr);
    }

    useEffect(()=>{
        fetchProperties();
    },[])

    let properties =[];
    if(propertydetails.length > 0){
        properties = propertydetails.slice(0,12);
    }
  

    return ( 
        <MainSub>
            {propertydetails &&
            <div>
                <div className="filters-section-container">
                    <div className="filter-section">
                        <FilterOptions/>
                        <FilterOptionsForMobile/>
                    </div>
                    <div className="filter-results">
                        <CardContainer properties={properties} className="filter-cards" details="filter-results-properties" carousel="true"></CardContainer>
                    </div>
                </div>
                <Locations/>
            </div>
            }
        </MainSub>
     );
}
 
export default Filter;