/* eslint-disable */
import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import CardContainer from "../Home/ExclusiveProperty/CardContainer";
import './Filter.css';
import FilterOptions from "./FilterOptions";
import FilterOptionsForMobile from "./FilterOptionForMobile/FilterOptionsForMobile";
import { useState } from "react";
import geohash from "ngeohash";
import geohashDistance from "geohash-distance";

const Filter = (props) => {

    let propertyarr = [];
     // get documents from snap
    if(props.searchLatlng){ // as search latlng takes time to get
        props.snap.forEach(item =>{
            if('images' in item.data()){
                const images = item.data().images;
                if(images.length > 0){
                    // add property distance field 
                    const propGeohash = item.data().geolocation
                    const searchedGeohash = geohash.encode(props.searchLatlng.lat,props.searchLatlng.lng);
                    const distance = geohashDistance.inKm(propGeohash,searchedGeohash);
                    const property  = item.data()
                    property["distance"] = distance.toFixed(1);
                    // push property to properties array
                    propertyarr.push(property);
                } 
            }       
        })
    }

    //FILTER SECTION
    let [filters,setFilters] = useState({})

    // set filter values
    const getFiltersHandler = (choosedFilters)=>{
        setFilters({...filters,...choosedFilters});
    }

    // clear filter values
    const clearFilters = (clear)=>{
        setFilters(clear);
        setSort("");
    }

    //filtering property array
    propertyarr = propertyarr.filter((item)=>{
        for(var key in filters){
            if (item[key] === undefined || item[key] != filters[key])
              return false;
        }
            return true;
    });


    // SORT SECTION
    const [sort,setSort] = useState("");

    // sort properties
    const setSortHandler = (sortValue)=>{
        if(sortValue !== undefined || sort===""){
            setSort(sortValue);
        }
    }
    
    // Ascending to Descending, Descending to Ascending
    if(sort === "LowToHigh"){
        propertyarr.sort(function(a, b) {
            return parseFloat(a.options[0].price) - parseFloat(b.options[0].price);
        });
    }
    if(sort === "HighToLow"){
        propertyarr.sort((a, b) => parseFloat(b.options[0].price) - parseFloat(a.options[0].price));
    }
   
    //DISTANCE SECTION
    const [showDistance,setShowDistance] = useState(false);
    const propertyDistanceHandler = (bool)=>{
        if(bool !== undefined){
            setShowDistance(bool);
        }
    }

    return ( 
        <MainSub searchedProperties={props.searchedProperties} user={props.user}>
            {propertyarr &&
            <div>
                <div className="filters-section-container">
                    <div className="filter-section">
                        <FilterOptions getFilters={getFiltersHandler} clearFilters={clearFilters} sortProperties={setSortHandler} propertyDistance={propertyDistanceHandler}/>
                        <FilterOptionsForMobile getFilters={getFiltersHandler} clearFilters={clearFilters} sortProperties={setSortHandler}  propertyDistance={propertyDistanceHandler} filters={filters} sort={sort} showDistance={showDistance}/>
                    </div>
                    <div className="filter-results">
                        <CardContainer properties={propertyarr} className="filter-cards" addPropDetailsHandler={props.addPropDetailsHandler}details="filter-results-properties" carousel="true" showDistance={showDistance}></CardContainer>
                    </div>
                </div>
                <Locations/>
            </div>
            }
        </MainSub>
     );
}
 
export default Filter;