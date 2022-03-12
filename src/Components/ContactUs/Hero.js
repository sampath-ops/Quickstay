import React from 'react'
import GoogleMaps from './GoogleMaps';
import facebook from '../../WebsiteMaterial/ContactUsImages/facebook.svg'
import instagram from '../../WebsiteMaterial/ContactUsImages/instagram.svg'
import linkedin from '../../WebsiteMaterial/ContactUsImages/linkedIn.svg'
import twitter from '../../WebsiteMaterial/ContactUsImages/twitter.svg'
import youtube from '../../WebsiteMaterial/ContactUsImages/youtube.svg';
import whatsapp from '../../WebsiteMaterial/ContactUsImages/WhatsApp.svg';
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
                <p>Chitkara Innovation Incubator Foundation,<br/> SCO 46, Sector 80, Mohali, Punjab.</p>
                <GoogleMaps/>
                <p>Call: +91-8387868880</p><p>Email: support@quickstayrooms.com</p>
                <div className='connectWithUs'>
                    <p>CONNECT WITH US ON SOCIAL MEDIA!</p>
                    <a href="https://www.facebook.com/quickstayrooms" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook"/></a>
                    <a href="https://www.instagram.com/quickstayrooms/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a>
                    <a href="https://www.linkedin.com/company/quickstayrooms" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
                    <a href="https://wa.me/+918387868880" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/></a>
                    <a href="https://twitter.com/quickstayrooms" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>
                    <a href="https://www.youtube.com/channel/UCJHwAKT6eaCMR7ubvYuKxUA" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube"/></a>                    
                </div>
            </div>
        </div>
    )
}
