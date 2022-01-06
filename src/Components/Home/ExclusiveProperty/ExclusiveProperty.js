/* eslint-disable */
import Card from "./Card";
import Description from "../Description";
import './ExclusiveProperty.css';
import { Link } from "react-router-dom";
import db from '../../../firebase.config';
import { useEffect,useState } from 'react';

const ExclusiveProperty = () => {

    const heading = ["Quick Stay Exclusive","Properties"]
    const description = "We won't show you photos that are too good to be true. Find the best room for rent near you!";

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

    let ExclusiveProperties =[];
    if(propertydetails.length > 0){
        ExclusiveProperties = propertydetails.slice(0,3);
        console.log(ExclusiveProperties)
    }
    
    return ( 
        <div className="exclusive">
            <Description head={heading} para={description}/>
            {ExclusiveProperties && <Card properties={ExclusiveProperties}/>}
            <div><Link to="/filters">See all <i className="fas fa-chevron-right"></i></Link></div>
        </div>
     );
}
 
export default ExclusiveProperty;