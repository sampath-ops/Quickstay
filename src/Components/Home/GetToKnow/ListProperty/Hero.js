import React,{useState} from 'react'
import Figures from '../../../About/Figures';
import ListHere from '../../../../WebsiteMaterial/ListPropertyImages/4.png'
import WhyListHere from '../../../../WebsiteMaterial/ListPropertyImages/6.png'


export default function Hero(props) {
    const [propertyTypeStyle, setPropertyTypeStyle] = useState(0);
    const [propertyForStyle, setPropertyForStyle] = useState(0);
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
                    <img className='whyListHereImg' src={WhyListHere} alt="WhyListHere" />
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
                <p className='propertyType'>Property Type</p>
                <div className='propertyTypeOptions'>
                    <div style={{backgroundColor: propertyTypeStyle===1?'#A00500':'#80808066', color:propertyTypeStyle===1?'white':'black'}} onClick={()=>{setPropertyTypeStyle(1) }}>PG</div>
                    <div style={{backgroundColor: propertyTypeStyle===2?'#A00500':'#80808066', color:propertyTypeStyle===2?'white':'black'}} onClick={()=>{setPropertyTypeStyle(2) }}>Flat</div>
                    <div style={{backgroundColor: propertyTypeStyle===3?'#A00500':'#80808066', color:propertyTypeStyle===3?'white':'black'}} onClick={()=>{setPropertyTypeStyle(3) }}>Independent Rooms</div>
                </div>
                <p className='propertyFor'>Property For</p>
                <div className='propertyForOptions'>
                    <div style={{backgroundColor: propertyForStyle===1?'#A00500':'#80808066', color:propertyForStyle===1?'white':'black'}} onClick={()=>{setPropertyForStyle(1) }}>Male</div>
                    <div style={{backgroundColor: propertyForStyle===2?'#A00500':'#80808066', color:propertyForStyle===2?'white':'black'}} onClick={()=>{setPropertyForStyle(2) }}>Female</div>
                    <div style={{backgroundColor: propertyForStyle===3?'#A00500':'#80808066', color:propertyForStyle===3?'white':'black'}} onClick={()=>{setPropertyForStyle(3) }}>Unisex</div>
                    <div style={{backgroundColor: propertyForStyle===4?'#A00500':'#80808066', color:propertyForStyle===4?'white':'black'}} onClick={()=>{setPropertyForStyle(4) }}>Family</div>
                </div>

                <button className='submitButton' type="submit">SUBMIT</button>
            </div>
            <div className='figures2'><Figures/></div>
        </div>
    )
}
