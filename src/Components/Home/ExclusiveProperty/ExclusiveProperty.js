/* eslint-disable */
import Card from "./Card";
import Description from "../Description";
import './ExclusiveProperty.css';
import { Link } from "react-router-dom";
import {db} from '../../../firebase.config';
import { useEffect,useState } from 'react';

const ExclusiveProperty = (props) => {

    const heading = ["Quick Stay Exclusive","Properties"]
    const description = "We won't show you photos that are too good to be true. Find the best room for rent near you!";

    const [exclusiveProperties,setExclusiveProperties] = useState([]);
    const propertyarr = [];

    const fetchProperties = async()=>{
        const response = db.collection('properties').where("activeStatus","==",true)
        .where("approved","==",true);
        const data = await response.get();
        props.getAllProperties(data);
        data.docs.forEach(item =>{
            if('images' in item.data()){
                const images = item.data().images;
                if(images.length > 0){
                    propertyarr.push(item.data());
                } 
            }       
        })
        setExclusiveProperties(propertyarr);
    }

    useEffect(()=>{
        fetchProperties();
    },[])

    let ExclusivePropertiesArr =[];
    if(exclusiveProperties.length > 0){
        ExclusivePropertiesArr = exclusiveProperties.slice(0,3);
    }
    
    return ( 
        <div className="exclusive">
            <Description head={heading} para={description}/>
            {ExclusivePropertiesArr && <Card properties={ExclusivePropertiesArr} addPropDetailsHandler={props.addPropDetailsHandler}/>}
            <div><Link to="/filters">See all <i className="fas fa-chevron-right"></i></Link></div>
        </div>
     );
}
 
export default ExclusiveProperty;