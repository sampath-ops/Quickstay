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

    const extract = (obj, ...keys) => {
        const newObject = Object.assign({});
        Object.keys(obj).forEach((key) => {
           if(keys.includes(key)){
              newObject[key] = obj[key];
              delete obj[key];
           };
        });
        return newObject;
     };

    const fetchProperties = async()=>{
        const response = db.collection('properties');
        const data = await response.get();
        data.docs.forEach(item =>{
            if('images' in item.data()){
                const images = item.data().images;
                if(images.length > 0){
                    propertyarr.push(extract(item.data(), 'furnishingStatus', 'options', 'images','orginalAddress','propertyFor'));
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

    // const properties = [
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'Private Room',
    //         amount:6500,
    //         location:"Sec 22, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Male",
    //         alter:"male"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'PG',
    //         amount:5000,
    //         location:"Sec 46, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Female",
    //         alter:"female"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'Single Room',
    //         amount:8500,
    //         location:"VIP road, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Unisex",
    //         alter:"unisex"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'1RK',
    //         amount:"10,500",
    //         location:"VIP road, Zirakpur",
    //         type:"Fully-Furnished",
    //         person:"Female",
    //         alter:"Female"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'Private Room',
    //         amount:6500,
    //         location:"Sec 22, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Male",
    //         alter:"male"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'PG',
    //         amount:5000,
    //         location:"Sec 46, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Female",
    //         alter:"female"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'Single Room',
    //         amount:8500,
    //         location:"VIP road, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Unisex",
    //         alter:"unisex"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'1RK',
    //         amount:"10,500",
    //         location:"VIP road, Zirakpur",
    //         type:"Fully-Furnished",
    //         person:"Female",
    //         alter:"Female"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'Private Room',
    //         amount:6500,
    //         location:"Sec 22, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Male",
    //         alter:"male"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'PG',
    //         amount:5000,
    //         location:"Sec 46, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Female",
    //         alter:"female"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'Single Room',
    //         amount:8500,
    //         location:"VIP road, Chandigarh",
    //         type:"Fully-Furnished",
    //         person:"Unisex",
    //         alter:"unisex"
    //     },
    //     {
    //         images:["living-room.jpg","living-room.jpg","living-room.jpg"],
    //         name:'1RK',
    //         amount:"10,500",
    //         location:"VIP road, Zirakpur",
    //         type:"Fully-Furnished",
    //         person:"Female",
    //         alter:"Female"
    //     },
    // ]

  

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