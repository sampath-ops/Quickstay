import React from 'react'
import global from '../../WebsiteMaterial/AboutImages/Global.png'

export default function Hero() {
    return (
        <div className="heroSection">
            <div className="heroText">
                <span>What are we doing?</span>
                <p>Making the rental home search easier!</p>
            </div>
            <div className="heroImg">
                <img src={global} alt="global" />
            </div>
        </div>
    )
}
