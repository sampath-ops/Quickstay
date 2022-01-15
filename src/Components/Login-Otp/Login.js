import { useEffect, useRef, useState } from "react";
import './Login.css';
import Button from "../SignUp/Button";
import lottie from 'lottie-web';
import OTP from './Otp';
import Main from "../NavBar/Main";
import {app} from "../../firebase.config"
import { getAuth,signInWithPhoneNumber,RecaptchaVerifier } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = (props) => {

    const [enteredNumber,setEnteredNumber] = useState('');
    const [isValid,setIsValid] = useState(true);
    const [isRecievedOtp,setIsRecievedOtp] = useState(false);
    const navigate = useNavigate();

    // MOBILE INPUT CHANGE HANDLER
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

    const auth = getAuth(app);
    const configureRecaptcha = ()=>{
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': () => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              loginFormSubmitHandler();
            }
          }, auth);
    }

    // LOGIN FORM SUBMIT HANDLER
    const loginFormSubmitHandler = (event)=>{

        event.preventDefault();

        if(enteredNumber.trim().length === 0){
            setIsValid(false);
            return;
        }

        const phoneNumber = "+91" + enteredNumber;

        // solve recaptcha
        configureRecaptcha();

        // send otp
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          //show otp component
          setIsRecievedOtp(true);
        
        }).catch((error) => {
          // Error; SMS not sent
          window.grecaptcha.reset(window.recaptchaWidgetId);
          console.log("otp is not sent")
        });
        
    }

    // confirm otp and get user
    const onOtpSubmitHandler = (otp)=>{
        window.confirmationResult.confirm(otp).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user);
            props.getUserId(user);
            navigate('/')
            // ...
          }).catch((error) => {
            // User couldn't sign in (bad verification code?)
          });
    }

    return ( 
        <Main>
            {isRecievedOtp ? <OTP onOtpSubmit={onOtpSubmitHandler} userNumber={enteredNumber}/> :
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
                        <div id="sign-in-button"></div>
                        <Button type='submit' text='Send OTP'/>
                    </div>
                </div>
            </form>} 
        
        </Main>
        
     );
}
 
export default Login;