import { useEffect, useRef, useState } from "react";
import './Login.css';
import Button from "../SignUp/Button";
import lottie from 'lottie-web';
import OTP from './Otp';
import Main from "../NavBar/Main";
const Login = () => {

    const [enteredNumber,setEnteredNumber] = useState('');
    const [isValid,setIsValid] = useState(true);
    const [isRecievedOtp,setIsRecievedOtp] = useState(false);

    const mobileChangeHandler = (event)=>{
        if(enteredNumber.trim().length > 0){
            setIsValid(true); 
        }
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

    const loginFormSubmitHandler = (event)=>{
        event.preventDefault();
        if(enteredNumber.trim().length === 0){
            setIsValid(false);
            return;
        }
       setIsRecievedOtp(true);
       
    }

    return ( 
        <Main>
            {isRecievedOtp ? <OTP/> :
            <form className="login"  onSubmit={loginFormSubmitHandler}>
                <div className="form-container">
                    <div className="head">
                        <p>Let us find you a</p>
                        <p>Perfect Home!</p> 
                    </div>
                    <div className="lottie-container" ref={lottieContainer}>

                    </div>
                    <div className={`input-container ${!isValid && "invalid"}`}>
                        <p>Login</p>
                        <p>Enter your mobile number to receive a verification code.</p>
                        <input name="mobile" type="tel" placeholder="Mobile Number" value={enteredNumber} onChange={mobileChangeHandler} />
                        <Button type='submit' text='Send OTP'/>
                    </div>
                </div>
            </form>} 
        
        </Main>
        
     );
}
 
export default Login;