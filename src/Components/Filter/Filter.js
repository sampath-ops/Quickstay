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
import PropertyNotFound from "../PropertyNotFound/PropertyNotFound";
import { useParams } from "react-router-dom";
import CityLatLng from "./CityLatLng";
import GetGeoDocuments from "../GetGeoDocuments";
import {Helmet} from "react-helmet";

const Filter = (props) => {

    let propertyarr = [];

    let documentsSnap = props.snap;

    let {id} = useParams();

    const [isDocSnap,setDocSnap] = useState(false); 
    
    const fetchLinksData = async(cityName)=>{    
        let location = CityLatLng[cityName];
        documentsSnap = await GetGeoDocuments(location.lat,location.lng,7.45645);
        props.allProperties(documentsSnap);
    }

    if(id && !isDocSnap){
       setDocSnap(true);
       const urlArr = id.split("-")
       let cityName = urlArr[urlArr.length-1].charAt(0).toUpperCase() + urlArr[urlArr.length-1].slice(1);
      
       if(urlArr[urlArr.length-2] == "kailash" || urlArr[urlArr.length-2] == "phase" || cityName == "East" || cityName == "West" || cityName == "Nagar" || cityName == "Vihar" || urlArr[urlArr.length-2] == "sector" ){
           cityName = urlArr[urlArr.length-2].charAt(0).toUpperCase() + urlArr[urlArr.length-2].slice(1);
           cityName += urlArr[urlArr.length-1].charAt(0).toUpperCase() + urlArr[urlArr.length-1].slice(1);
       }
       fetchLinksData(cityName);
    }

     // get documents from snap
     documentsSnap.forEach(item =>{
            if('images' in item.data()){
                const images = item.data().images;
                if(images.length > 0){
                    const property  = item.data();
                    // add property distance field 
                    if(props.searchLatlng){
                        const propGeohash = item.data().geolocation
                        const searchedGeohash = geohash.encode(props.searchLatlng.lat,props.searchLatlng.lng);
                        const distance = geohashDistance.inKm(propGeohash,searchedGeohash);
                        property["distance"] = distance.toFixed(1);
                    }
                    // push property to properties array
                    propertyarr.push(property);
                } 
            }       
        })

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
        if(sortValue !== undefined){
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

    // show not found page 
    if(props.snap.size < 1 || propertyarr.length < 1){
        return(
        <MainSub searchedProperties={props.searchedProperties} user={props.user}>
            {propertyarr &&
            <div>
                <div className="filters-section-container_notFound">
                    <div className="filter-section">
                        <FilterOptions getFilters={getFiltersHandler} clearFilters={clearFilters} sortProperties={setSortHandler} propertyDistance={propertyDistanceHandler}/>
                    </div>
                    <div className="filter-results">
                        <PropertyNotFound/>
                    </div>
                </div>
                <Locations getAllProperties={props.allProperties}/>
            </div>
            }
        </MainSub>
        )
    }

    return ( 
        <MainSub searchedProperties={props.searchedProperties} user={props.user}>

            <Helmet>
                <title>QuickStay</title>
                <meta name="description" content="Live in the best rental stays like PG, Flat, Coliving or Room without brokerage. Choose from Unfurnished, Semi-Furnished, Furnished long-term accommodations only on QuickStay" />
            </Helmet>

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
                <Locations getAllProperties={props.allProperties}/>
            </div>
            }
        </MainSub>
     );
}
 
export default Filter;