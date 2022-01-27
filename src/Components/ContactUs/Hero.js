import React from 'react'
import GoogleMaps from './GoogleMaps';
import facebook from '../../WebsiteMaterial/ContactUsImages/facebook.png'
import instagram from '../../WebsiteMaterial/ContactUsImages/instagram.png'
import linkedin from '../../WebsiteMaterial/ContactUsImages/linkedin.png'
import twitter from '../../WebsiteMaterial/ContactUsImages/twitter.png'
import youtube from '../../WebsiteMaterial/ContactUsImages/youtube.png';
import {useState} from "react";
import {collection,addDoc} from "firebase/firestore";
import { db } from '../../firebase.config';

export default function Hero() {

    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userPhn,setUserPhn] = useState('');
    const [userMessage,setUserMessage] = useState('');
    // VALIDATION OF FORM FIELDS
    const [isValid,setIsValid] = useState(true);

    // SET NAME
    const nameChangeHandler = (e)=>{
        if(e.target.value.trim().length > 0){
            setIsValid(true);
        }
        setUserName(e.target.value);
    }

    // SET PHONENUMBER
    const phnChangeHandler = (e)=>{
        if(e.target.value.trim().length > 0){
            setIsValid(true);
        }
        setUserPhn(e.target.value)
    }

    // SET EMAIL
    const emailChangeHandler = (e)=>{
        if(e.target.value.trim().length > 0){
            setIsValid(true);
        }
        setUserEmail(e.target.value);
    }

    // SET MESSAGE
    const messageChangeHandler = (e)=>{
        if(e.target.value.trim().length > 0){
            setIsValid(true);
        }
        setUserMessage(e.target.value);
    }

    // GET VALUES FROM FORM
    const contactUsHandler = async(e)=>{

        e.preventDefault();

        if(userName.trim().length === 0 || userEmail.trim().length === 0 || userPhn.trim().length === 0 || userMessage.trim().length === 0){
            setIsValid(false);
            return
        }

        const userQuery = {
            name:userName,
            phnNo:userPhn,
            email:userEmail,
            msg:userMessage
        }

        console.log(userQuery);

        // PUSH DATA TO DATABASE
       const query = await addDoc(collection(db,"websiteQueries"),userQuery);

       if(query){
            // RESET FIELD VALUES
            setUserName('');
            setUserPhn('');
            setUserEmail('');
            setUserMessage('');
       }
    }


    return (
        <div className='contactUs_heroContainer'>
            <div className='heroDetails'>
                <p>CONTACT US!</p>
                <p>Reach out to us for any query, we will get back to you as early as possible.</p>
                <form onSubmit={contactUsHandler} className={isValid ? "" : "invalid"}>
                    <div>
                        <input type="text" placeholder='Name' onChange={nameChangeHandler} value={userName}/>
                        <input type="tel" placeholder='Phone No.' value={userPhn} onChange={phnChangeHandler}/>
                    </div>
                    <div>
                        <input type="email" placeholder='Email' value={userEmail} onChange={emailChangeHandler}/>
                        <textarea placeholder='Message...' value={userMessage} onChange={messageChangeHandler}/>
                    </div>
                    <div>
                        <button type='submit' className='sendButton'>SEND</button>
                    </div>
                </form>
            </div>
            <div className='heroMap'>
                <p>QUICKSTAY PRIVATE LIMITED</p>
                <p>Chitkara Innovation Incubator Foundation, SCO 46, Sector 80, Mohali, Punjab.</p>
                <GoogleMaps/>
                <p>Call: +91-8387868880</p><p>Email: support@quickstayrooms.com</p>
                <p>CONNECT WITH US ON SOCIAL MEDIA!</p>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={linkedin} alt="linkedin"/>
                <img src={twitter} alt="twitter"/>
                <img src={youtube} alt="youtube"/>
            </div>
        </div>
    )
}
