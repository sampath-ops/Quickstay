/* eslint-disable */
import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import CardContainer from "../Home/ExclusiveProperty/CardContainer";
import './Filter.css';
import FilterOptions from "./FilterOptions";
import FilterOptionsForMobile from "./FilterOptionForMobile/FilterOptionsForMobile";
import { useState } from "react";

const Filter = (props) => {

    let propertyarr = [];
     // get documents from snap
     props.snap.forEach(item =>{
        if('images' in item.data()){
            const images = item.data().images;
            if(images.length > 0){
                propertyarr.push(item.data());
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
    }

    console.log(filters)

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
        setSort(sortValue);
    }
    console.log(sort)
    // Ascending to Descending, Descending to Ascending
    if(sort === "LTH"){
        propertyarr.sort(function(a, b) {
            return parseFloat(a.options[0].price) - parseFloat(b.options[0].price);
        });
    }
    if(sort === "HTL"){
        propertyarr.sort((a, b) => parseFloat(b.options[0].price) - parseFloat(a.options[0].price));
    }

    return ( 
        <MainSub searchedProperties={props.searchedProperties} user={props.user}>
            {propertyarr &&
            <div>
                <div className="filters-section-container">
                    <div className="filter-section">
                        <FilterOptions getFilters={getFiltersHandler} clearFilters={clearFilters} sortProperties={setSortHandler}/>
                        <FilterOptionsForMobile getFilters={getFiltersHandler} clearFilters={clearFilters} sortProperties={setSortHandler} filters={filters} sort={sort}/>
                    </div>
                    <div className="filter-results">
                        <CardContainer properties={propertyarr} className="filter-cards" addPropDetailsHandler={props.addPropDetailsHandler}details="filter-results-properties" carousel="true"></CardContainer>
                    </div>
                </div>
                <Locations/>
            </div>
            }
        </MainSub>
     );
}
 
export default Filter;