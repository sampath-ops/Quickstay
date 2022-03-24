import React from 'react'
import SearchHomes from '../../WebsiteMaterial/AboutImages/SearchHomes.webp';
import ListHome from '../../WebsiteMaterial/AboutImages/ListHome.webp';

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
                    <p>
                        Looking for a<br/>rental stay?<br/>
                        <a href="/">SEARCH HOMES</a>
                    </p>
                </div>
                
                
            </div>
            
            <div className="becomeFamily">
                <div>
                    <img className='becomeFamilyImg2' src={ListHome} alt="ListHome" />
                </div>
                <div className='becomeFamilyText'>
                    <p>
                        Are you a home<br/>owner?<br/>
                        <a href="/">LIST YOUR HOME</a>
                    </p>
                </div>
            </div>
            
        </div>
    )
}
