import React, { useState } from 'react'
import Figures from '../../../About/Figures';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase.config';
import firebase from 'firebase/compat/app';
import WhyList from './WhyList';
import HowItWorks from './HowItWorks';
import { getAuth } from 'firebase/auth';
import { app } from '../../../../firebase.config';


export default function Hero() {

    const propertyTypes = ["PG","Flat","Independent Rooms"];
    const propertyForGender = ["Male","Female","Unisex","Family"];

    const [ownerName,setownerName] = useState("");
    const [ownerPhnNo,setOwnerPhnNo] = useState("");
    const [propertyAddress,setPropertyAddress] = useState("");
    const [propertyCity,setPropertyCity] = useState("");
    const [propertyType,setPropertyType] = useState("");
    const [propertyTypeSelected,setPropertyTypeSelected] = useState("");
    const [propertyFor,setPropertyFor] = useState("");
    const [propertForSelected,setPropertyForSelected] = useState("");
    const [isValid,setIsValid] = useState(true);
    const [isSubmitted,setIsSubmitted] = useState(false);
    const auth = getAuth(app);
    let userId = "";

    if(auth.currentUser){
        userId = auth.currentUser.uid;
    }

    const ownerNameHandler = (e)=>{
        if(e.target.value.length > 0){
            setIsValid(true);
        }
        setownerName(e.target.value);
    }

    const ownerPhnHandler = (e)=>{
        if(e.target.value.length > 0){
            setIsValid(true);
        }
        setOwnerPhnNo(e.target.value);
    }

    const propertyAddressHandler = (e)=>{
        if(e.target.value.length > 0){
            setIsValid(true);
        }
        setPropertyAddress(e.target.value);
    }

    const propertyCityHandler = (e)=>{
        if(e.target.value.length > 0){
            setIsValid(true);
        }
        setPropertyCity(e.target.value);
    }

    // property type handler
    const propertyTypeHandler = (type,index)=>{
        selectPropertyTypeColor(index);
        setPropertyType(type);
    }

    // change color of selected property
    const selectPropertyTypeColor = (index)=>{
        setPropertyTypeSelected(index);
    }

    // property for handler
    const propertyForHandler = (gender,index)=>{
        selectPropertyForColor(index);
        setPropertyFor(gender);
    }

    const selectPropertyForColor = (index)=>{
        setPropertyForSelected(index);
    }

    // List Property Handler
    const listPropertyHandler = async(e)=>{

        e.preventDefault();

        if(ownerName.trim().length === 0 || ownerPhnNo.trim().length === 0 || propertyAddress.trim().length === 0 || propertyCity.trim().length === 0){
            setIsValid(false);
            return;
        }

        const propertyDetails = {
            approved: false,
            name:ownerName,
            phoneNo:"+91"+ownerPhnNo,
            originalAddress:propertyAddress,
            city:propertyCity,
            propertyType,
            propertyFor,
            uid:userId,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }

        console.log(propertyDetails);
       
        // push data to database
        await addDoc(collection(db,"propertyListingLeads"),propertyDetails).then(()=>{
            setIsSubmitted(true);
            
        }).catch(()=>{
            alert("form not submitted :(");
        })

        window.setTimeout(()=>{
            setIsSubmitted(false);
        },3000)

        // RESET FILEDS
        setownerName("");
        setOwnerPhnNo("");
        setPropertyAddress("");
        setPropertyCity("");
        setPropertyType("");
        setPropertyFor("");
        setPropertyForSelected("");
        setPropertyTypeSelected("");

    }

    return (
        <div className="heroContainer">
            <div className='whyQuickStay'>
                <div className='listHere'>
                    <p>List your home with QuickStay!</p>
                    <p>How it works?</p>
                    <HowItWorks/>
                </div>
                <div className='whyListHere'>
                    <p>Why list on QuickStay?</p>
                    <WhyList/>
                </div>
                <div className='figures1'><Figures/></div>
            </div>
            <form onSubmit={listPropertyHandler} className={isValid ? "": "invalid"}>
                <div className='listingPropertyDetails'>
                    <input type="text" placeholder='Name' value={ownerName} onChange={ownerNameHandler}/>
                    <input type="tel" placeholder='Phone No.' value={ownerPhnNo} onChange={ownerPhnHandler}/>
                    <input type="text" placeholder='Address' value={propertyAddress} onChange={propertyAddressHandler}/>
                    <input type="text" placeholder='City' value={propertyCity} onChange={propertyCityHandler}/>
                    <p>Property Type</p>
                    
                    <div className="propertyType">
                        {
                            propertyTypes.map((type,index)=>(
                                <div className={propertyTypeSelected === index ? "select-property":""} onClick={()=>propertyTypeHandler(type,index)} key={index}>{type}</div>
                            ))
                        }
                    </div>

                    <p>Property For</p>

                    <div className="propertyFor">
                        {
                            propertyForGender.map((gender,index)=>(
                                <div className={propertForSelected === index ? "select-property":""} key={index} onClick={()=>propertyForHandler(gender,index)}>{gender}</div>
                            ))
                        }
                    </div>

                    <button className='submitButton' type="submit">SUBMIT</button>
                    <div className="success-message">
                         {isSubmitted && <span>Thank you for the response</span>}
                    </div>
                </div>
            </form>
            <div className='figures2'><Figures/></div>
        </div>
    )
}
