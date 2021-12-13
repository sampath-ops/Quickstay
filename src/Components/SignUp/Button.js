import './SignUp.css';
const Button = (props) => {
    return ( 
        <div className="submit-btn">
            <button type={props.type}>{props.text}</button>
        </div>
     );
}
 
export default Button;