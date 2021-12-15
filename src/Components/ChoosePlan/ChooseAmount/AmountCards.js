import './AmountCards.css';
const AmountCards = (props) => {
    return ( 
        <div className="amountcards">
            <div className="card-tag">
                <div>{props.plantype}</div>
                <input type="radio" name="plan" value='0' />
            </div>
            <div className="card-amount">
                <span> &#8377;{props.cost}</span> <br />
                <span>{props.validity}</span>
            </div>
        </div>
     );
}
 
export default AmountCards;