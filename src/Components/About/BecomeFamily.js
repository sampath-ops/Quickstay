import React from 'react'
import SearchHomes from '../../WebsiteMaterial/AboutImages/SearchHomes.png'
import ListHome from '../../WebsiteMaterial/AboutImages/ListHome.png'

export default function BecomeFamily() {
    return (
        <div className="becomeFamilyContainer">
            <div className="becomeFamilyHead">
                Become a part of our family!
            </div>
            <div className="becomeFamily">
                <div>
                    <img className='becomeFamilyImg1' src={SearchHomes} alt="SearchHomes" />
                </div>
                <div className='becomeFamilyText'>
                    Looking for a rental stay?<br/>
                    <a href="/">SEARCH HOMES</a>
                </div>
                
                
            </div>
            
            <div className="becomeFamily">
                <div>
                    <img className='becomeFamilyImg2' src={ListHome} alt="ListHome" />
                </div>
                <div className='becomeFamilyText'>
                    Are you a home owner?<br/>
                    <a href="/">LIST YOUR HOME</a>
                </div>
            </div>
            
        </div>
    )
}
