import React, { useState } from 'react'
import Figures from '../../../About/Figures';
import ListHere from '../../../../WebsiteMaterial/ListPropertyImages/4.png'
import WhyListHere from '../../../../WebsiteMaterial/ListPropertyImages/6.png'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase.config';


export default function Hero() {

    const propertyTypes = ["PG","Flat","Independent Rooms"];
    const propertyForGender = ["Male","Female","Unisex","Family"];

    const [ownerEmail,setOwnerEmail] = useState("");
    const [ownerPhnNo,setOwnerPhnNo] = useState("");
    const [propertyAddress,setPropertyAddress] = useState("");
    const [propertyCity,setPropertyCity] = useState("");
    const [propertyType,setPropertyType] = useState("");
    const [propertyTypeSelected,setPropertyTypeSelected] = useState("");
    const [propertyFor,setPropertyFor] = useState("");
    const [propertForSelected,setPropertyForSelected] = useState("");
    const [isValid,setIsValid] = useState(true);

    const ownerEmailHandler = (e)=>{
        if(e.target.value.length > 0){
            setIsValid(true);
        }
        setOwnerEmail(e.target.value);
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

        if(ownerEmail.trim().length === 0 || ownerPhnNo.trim().length === 0 || propertyAddress.trim().length === 0 || propertyCity.trim().length === 0){
            setIsValid(false);
            return;
        }

        const propertyDetails = {
            ownerEmail,
            ownerPhnNo,
            propertyAddress,
            propertyCity,
            propertyType,
            propertyFor
        }

        console.log(propertyDetails);

        // push data to database
        await addDoc(collection(db,"propertyListingLeads"),propertyDetails);

        // RESET FILEDS
        setOwnerEmail("");
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
                    <img className='' src={ListHere} alt="ListHere" />
                    <div className="imageLabels">
                        <div>Register on<br/>QuickStay.</div>
                        <div>Fill in all the<br/>property details.</div>
                        <div>Submit for<br/>QuickVerification.</div>
                        <div>Start getting<br/>tenants!</div>
                    </div>
                </div>
                <div className='whyListHere'>
                    <p>Why list on QuickStay?</p>
                    <img className='' src={WhyListHere} alt="WhyListHere" />
                    <div className="imageLabels">
                        <div>List your property<br/>FOR FREE.<br/>Earn Monthly!</div>
                        <div>Reach to<br/>wider Audience.</div>
                        <div>Tenants can<br/>contact you directly.</div>
                        <div>Customer care<br/>support.</div>
                    </div>
                </div>
                <div className='figures1'><Figures/></div>
            </div>
            <form onSubmit={listPropertyHandler} className={isValid ? "": "invalid"}>
                <div className='listingPropertyDetails'>
                    <input type="email" placeholder='Email' value={ownerEmail} onChange={ownerEmailHandler}/>
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
                </div>
            </form>
            <div className='figures2'><Figures/></div>
        </div>
    )
}
