import lottie from 'lottie-web';
import { useEffect, useRef} from "react";
import OtpInput from './OtpInput';

const Otp = (props) => {

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
        <div className="login">
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
                    <p>Enter the 6 digit code sent to <br />+91 {props.userNumber}</p>
    
                    <OtpInput submitHandler={props.onOtpSubmit}/>
                   
                    <div className="edit-method">
                        <span >Change Number</span>
                        <span >Resend OTP</span>
                    </div>
                </div>
        </div>
     );
}
 
export default Otp;