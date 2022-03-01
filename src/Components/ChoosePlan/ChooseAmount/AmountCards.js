import './AmountCards.css';
const AmountCards = (props) => {

    const selectPlan = (amount)=>{
        props.setPlan(amount);
    }

    return ( 
        <label htmlFor={props.validity} className={`amountcards ${props.class}`}>
            <div onClick={()=>selectPlan(props.cost)}>
                
                <div className="card-tag">
                    <div>{props.plantype}</div>
                    <input type="radio" name="plan" id={props.validity}/>
                </div>
                <div className="card-amount">
                    <span> &#8377;{props.cost}</span> <br />
                    <span>{props.validity}</span>
                </div>
            </div>
        </label>
     );
}
 
export default AmountCards;