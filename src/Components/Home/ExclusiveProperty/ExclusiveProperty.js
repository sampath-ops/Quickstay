/* eslint-disable */
import Card from "./Card";
import Description from "../Description";
import './ExclusiveProperty.css';
import { Link } from "react-router-dom";
import db from '../../../firebase.config';
import { useEffect,useState } from 'react';

const ExclusiveProperty = (props) => {

    const heading = ["Quick Stay Exclusive","Properties"]
    const description = "We won't show you photos that are too good to be true. Find the best room for rent near you!";

    const [propertydetails,setPropertyDetails] = useState([]);
    const propertyarr = [];

    const fetchProperties = async()=>{
        const response = db.collection('properties').where("activeStatus","==",true)
        .where("approved","==",true);
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

    let ExclusiveProperties =[];
    if(propertydetails.length > 0){
        ExclusiveProperties = propertydetails.slice(0,3);
    }
    
    return ( 
        <div className="exclusive">
            <Description head={heading} para={description}/>
            {ExclusiveProperties && <Card properties={ExclusiveProperties} addPropDetailsHandler={props.addPropDetailsHandler}/>}
            <div><Link to="/filters">See all <i className="fas fa-chevron-right"></i></Link></div>
        </div>
     );
}
 
export default ExclusiveProperty;