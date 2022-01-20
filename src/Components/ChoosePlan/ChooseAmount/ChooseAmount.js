import AmountCards from "./AmountCards";
import './ChooseAmount.css';
import {Link} from 'react-router-dom';
const ChooseAmount = () => {
    const chooseAmount = [
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
                    <div className="amountcards-container">
                        {
                        chooseAmount.map((plan,index)=>{
                           return(
                            <AmountCards key={index} plantype={plan.type} cost={plan.amount} validity={plan.duration}/>
                           )
                        })
                        }   
                    </div>
                    <div className="choose-plan-buttons">
                        <button>Pay Now</button>
                        <button><Link to='/'>Maybe Later</Link></button>
                    </div>
                </div>
     );
}
 
export default ChooseAmount;