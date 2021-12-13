import lottie from 'lottie-web';
import { useEffect, useRef} from "react";
import Button from '../SignUp/Button';
import { Link } from 'react-router-dom';

const Otp = () => {

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

    const otpFormSubmitHandler = (event)=>{
        event.preventDefault();       
    }

    return ( 
        <form className="login" onSubmit={otpFormSubmitHandler}>
            <div className="form-container">
                <div className="head">
                        <p>Just a step away from</p>
                        <p>Your New Home!</p> 
                    </div>
                </div>
                <div className="lottie-container" ref={lottieContainer}>

                </div>
                <div className="input-container">
                    <p>Verification</p>
                    <p>Enter the 6 digit code sent to <br />+919876543210</p>
                    <div className="otp-container">
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                    </div>
                    <Button type='submit' text='Verify'/>
                    <div className="edit-method">
                        <Link to="#">Change Number</Link>
                        <Link to="#">Resend OTP</Link>
                    </div>
                </div>
        </form>
     );
}
 
export default Otp;