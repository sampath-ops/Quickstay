import HowItWorksCard from "./HowItWorksCard";
import './HowItWorks.css';
const HowItWorks = () => {
    const cardDetails = [
        {
            number:"1",
            txt1:"Become a QuickStay Premium user",
            txt2:"and choose your favorite stay.",
            color:"#A00500"
        },
        {
            number:"2",
            txt1:"Get access to verified property owner",
            txt2:"contacts. Call/message them directly!",
            color:"#FFDE17"
        },
        {
            number:"3",
            txt1:"Fine your new stay easily in a new city!",
            txt2:" Save thousands on brokerage.",
            color:"#00C2FF"
        },
    ]
    return ( 
        <div className="how-it-works">
            <p>How It Works?</p>
            <div className="howWorksCard">
                {
                    cardDetails.map((cardDetail,index)=>{
                        return(
                            <HowItWorksCard key={index} number={cardDetail.number} txt1={cardDetail.txt1} txt2={cardDetail.txt2} color={cardDetail.color}/>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default HowItWorks;