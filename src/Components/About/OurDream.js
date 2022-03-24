import React from 'react';
import Img1 from '../../WebsiteMaterial/AboutImages/VerifiedRentalStays.webp';
import Img2 from '../../WebsiteMaterial/AboutImages/HomemadeFood.webp';
import Img3 from '../../WebsiteMaterial/AboutImages/HomeServices.webp';

export default function OurDream() {
    return (
        <>
        <div className='ourDream'>
            <h1>QuickStay is a digital solution for students and young professionals <br/> searching for a long-term rental home in a new city.</h1>
            <h1>O&nbsp; U&nbsp; R&nbsp;&nbsp;  D&nbsp; R&nbsp; E&nbsp; A&nbsp; M</h1>
            <p>Comfort living for everyone!</p>
        </div>

        <div className="ourDreamImages">
            <div className="ourDreamImg">
                <div><b>Verified Rental Stays</b><br/>(PG, Flat, Room, Coliving)</div>
                <img src={Img1} alt="Verified Rental Stays" />
            </div>
            <div className="ourDreamImg">
                <div><b>Homemade Food</b><br/>(Online Ordering)</div>
                <img src={Img2} alt="Homemade Food" />
            </div>
            <div className="ourDreamImg">
                <div><b>Home Services</b><br/>(Rental and After-Rental)</div>
                <img src={Img3} alt="Home Services" />
            </div>
        </div>

        </>
    )
}
