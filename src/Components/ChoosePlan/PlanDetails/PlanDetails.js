import PlanAvailability from './PlanAvailability';
import './PlanDetails.css';
const PlanDetails = () => {
    const planFeatures = [
        {
            text:"Become a Premium User",
            span2:"✔️",
            span3:"✔️",
            span4:"✔️",
        },
        {
            text:"Customer Support",
            span2:"✔️",
            span3:"✔️",
            span4:"✔️",
        },
        {
            text:"Property Filters",
            span2:"✔️",
            span3:"✔️",
            span4:"✔️",
        },
        {
            text:"Plan Validity",
            span2:"1 Month",
            span3:"6 Months",
            span4:"3 Months",
        },
        {
            text:"Unlimited access to Verified Property details",
            span2:"✔️",
            span3:"✔️",
            span4:"✔️",
        },
        {
            text:"Unlimited access to direct Property Owner contacts",
            span2:"✔️",
            span3:"✔️",
            span4:"✔️",
        },
        {
            text:"Surprise brand coupons from P&G, Bewakoof.com,Rapido, Zoomcar, 1mg and more..",
            span2:"✔️",
            span3:"✔️",
            span4:"✔️",
        },

    ]
    return ( 
        <div className="plandetails">
    
            <div className='plan-types-container'>
                <PlanAvailability />
                <PlanAvailability planType="MONTHLY" amount="199"/>
                <PlanAvailability planType="HALF YEARLY" amount="499" className="plan-active"/>
                <PlanAvailability planType="QUATERLY" amount="399"/>
            </div>
           
                {
                    planFeatures.map((planFeature,index)=>{
                        return(
                            <div className='plan-features' key={index}>
                            <p>{planFeature.text}</p>
                            <span>{planFeature.span2}</span>
                            <span>{planFeature.span3}</span>
                            <span>{planFeature.span4}</span>
                            </div>
                        )
                    })
                }
        </div>
     );
}
 
export default PlanDetails;