import './SignUp.css';
import ReactLoading from "react-loading";
const Button = (props) => {
    return ( 
        <div className="submit-btn">
            <button type={props.type}>{props.load ? <ReactLoading type="spin" width={25} height={23} className='loader'/>:props.text}</button>
        </div>
     );
}
 
export default Button;