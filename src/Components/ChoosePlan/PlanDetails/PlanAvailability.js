
import './PlanAvailability.css';
const PlanAvailability = (props) => {
    const classname = `plan-type ${props.className}`
    return ( 
        <div className="plan-availability">
            <div className={classname}>
                <p>
                    {props.planType} <br />
                    &#8377;{props.amount}
                </p>
            </div>
        </div>
     );
}
 
export default PlanAvailability;