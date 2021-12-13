import { useEffect, useRef, useState } from "react";
import './Login.css';
import Button from "../SignUp/Button";
import lottie from 'lottie-web';

const Login = () => {

    const [enteredNumber,setEnteredNumber] = useState('');

    const mobileChangeHandler = (event)=>{
        setEnteredNumber(event.target.value);
    }

    const lottieContainer = useRef(null);

    useEffect(()=>{
        lottie.loadAnimation({
            container:lottieContainer.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../../WebsiteMaterial/QuickStayAnimated.json')
        })
    },[])
    return ( 
        <form className="login">
            <div className="form-container">
                <div className="head">
                    <p>Let us find you a</p>
                    <p>Perfect Home!</p> 
                </div>
                <div className="lottie-container" ref={lottieContainer}>

                </div>
                <div className="login-input">
                    <p>Login</p>
                    <p>Enter your mobile number to receive a verification code.</p>
                    <input name="mobile" type="tel" placeholder="Mobile Number" value={enteredNumber} onChange={mobileChangeHandler} />
                    <Button type='submit' text='Send OTP'/>
                </div>
            </div>
        </form>
     );
}
 
export default Login;