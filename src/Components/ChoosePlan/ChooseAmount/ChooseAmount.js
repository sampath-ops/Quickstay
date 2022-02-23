import AmountCards from "./AmountCards";
import './ChooseAmount.css';
import {Link} from 'react-router-dom';
import { useState } from "react";
const ChooseAmount = () => {

    const [planAmount,setPlanAmount] = useState("");

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

    const setPlanHandler = (plan)=>{
        setPlanAmount(plan);
    }

    const payNow = ()=>{
        console.log(planAmount);
    }


    return ( 
        <div className="chooseamount">
            <div className="amountcards-container">
                {
                chooseAmount.map((plan,index)=>{
                    return(
                    <AmountCards setPlan={setPlanHandler} key={index} plantype={plan.type} cost={plan.amount} validity={plan.duration}/>
                    )
                })
                }   
            </div>
            <div className="choose-plan-buttons">
                <button onClick={payNow}>Pay Now</button>
                <button><Link to='/'>Maybe Later</Link></button>
            </div>
        </div>
     );
}
 
export default ChooseAmount;