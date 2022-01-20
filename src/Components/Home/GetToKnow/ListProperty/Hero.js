import React from 'react'
import Figures from '../../../About/Figures';
import ListHere from '../../../../WebsiteMaterial/ListPropertyImages/4.png'
import WhyListHere from '../../../../WebsiteMaterial/ListPropertyImages/6.png'


export default function Hero() {
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
            <div className='listingPropertyDetails'>
                <input type="text" placeholder=' Name'/>
                <input type="text" placeholder=' Phone No.'/>
                <input type="text" placeholder=' Address'/>
                <input type="text" placeholder=' City'/>
                <p>Property Type</p>
                
                <div className='propertyType'>
                    <div>PG</div>
                    <div>Flat</div>
                    <div>Independent Rooms</div>
                </div>
                <p>Property For</p>
                <div className='propertyFor'>
                    <div>Male</div>
                    <div>Female</div>
                    <div>Unisex</div>
                    <div>Family</div>
                </div>

                <button className='submitButton' type="submit">SUBMIT</button>
            </div>
            <div className='figures2'><Figures/></div>
        </div>
    )
}
