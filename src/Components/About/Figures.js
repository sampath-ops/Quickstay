import React from 'react'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
export default function Figures() {

    const achievements = [
        {
            count: "30000",
            text:"Trusted Users"
        },
        {
            count: "10000",
            text:"Verified Properties"
        },
        {
            count: "10",
            text:"and Counting"
        },
        {
            count: "18",
            text:"Brokerage Saved"
        },  
    ]


    return (
        <div  className="figuresContainer">
            <VisibilitySensor partialVisibility>
                {
                    ({isVisible})=>
                        <div>  
                            {achievements.map((achievement,index)=>(
                                <div className='figure' key={index}>
                                {isVisible ? <CountUp start={0} end={achievement.count} delay={0} duration={1}>
                                    {
                                        ({ countUpRef })=>(
                                            <div className='achievement-counter'>
                                                <p ref={countUpRef}/>
                                                {index === 2 ? <p>&#160;Cities</p>  : <p> +</p> }
                                                {index === 3 && <p>&#160;Lakhs</p>}
                                            </div>
                                        )
                                    }
                                </CountUp> : ''}
                                <span>{achievement.text}</span>
                                </div>
                            ))}  
                        </div>
                }
            </VisibilitySensor>

        </div>
    )
}
