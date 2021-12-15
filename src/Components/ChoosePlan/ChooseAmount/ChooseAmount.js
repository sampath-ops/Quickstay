import AmountCards from "./AmountCards";
import './ChooseAmount.css';
const ChooseAmount = () => {
    const chooseAmount = [
        {
            type:"FREE TRIAL",
            amount:0,
            duration:"lifetime"
        },
        {
            type:"MONTHLY",
            amount:199,
            duration:"30 Days"
        },
        {
            type:"HALF YEARLY",
            amount:499,
            duration:"6 Months"
        },
        {
            type:"QUATERLY",
            amount:399,
            duration:"3 Months"
        },
    ]
    return ( 
        <div className="chooseamount">
            {
                chooseAmount.map((plan,index)=>{
                   return(
                    <AmountCards key={index} plantype={plan.type} cost={plan.amount} validity={plan.duration}/>
                   )
                })
            }
            <div className="choose-plan-buttons">
                <button>Pay Now</button>
                <button>Maybe Later</button>
            </div>
        </div>
     );
}
 
export default ChooseAmount;