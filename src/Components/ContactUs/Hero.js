import React from 'react'
import GoogleMaps from './GoogleMaps';
import facebook from '../../WebsiteMaterial/ContactUsImages/facebook.png'
import instagram from '../../WebsiteMaterial/ContactUsImages/instagram.png'
import linkedin from '../../WebsiteMaterial/ContactUsImages/linkedin.png'
import twitter from '../../WebsiteMaterial/ContactUsImages/twitter.png'
import youtube from '../../WebsiteMaterial/ContactUsImages/youtube.png'

export default function Hero() {
    return (
        <div className='contactUs_heroContainer'>
            <div className='heroDetails'>
                <p>CONTACT US!</p>
                <p>Reach out to us for any query, we will get back to you as early as possible.</p>
                <div>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Phone No.'/>
                </div>
                <div>
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message...'/>
                </div>
                <div>

                    <button className='sendButton'>SEND</button>
                </div>
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
