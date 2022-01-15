/* eslint-disable */
import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import CardContainer from "../Home/ExclusiveProperty/CardContainer";
import './Filter.css';
import FilterOptions from "./FilterOptions";
import FilterOptionsForMobile from "./FilterOptionForMobile/FilterOptionsForMobile";
import { useState } from "react";

const Filter = (props) => {

    const propertyarr = [];
   
    props.snap.forEach(item =>{
        if('images' in item.data()){
            const images = item.data().images;
            if(images.length > 0){
                propertyarr.push(item.data());
            } 
        }       
    })

    return ( 
        <MainSub searchedProperties={props.searchedProperties} user={props.user}>
            {propertyarr &&
            <div>
                <div className="filters-section-container">
                    <div className="filter-section">
                        <FilterOptions/>
                        <FilterOptionsForMobile/>
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