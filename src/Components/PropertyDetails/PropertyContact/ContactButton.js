import { useNavigate } from "react-router-dom";
import whatsapp from "../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/whatsapp.png";
const ContactButton = (props) => {

    const navigate = useNavigate();
    console.log(props.userProfile)

    const contactWhatsappHandler = ()=>{    
        window.open(`https://wa.me/+919361924485`,"_blank");
        // if(!props.userProfile){
        //     navigate("/login")
        // }
        // else if(!props.userProfile.premiumUser){    
        //     navigate("/choose-plan")
        // }
        // else{
        //     // contact owner if user is logged in and user should be a premium user
        //     window.open(`https://wa.me/${props.propDetails.ownerPhoneNo}`,"_blank");
        // }
    }

    const contactWithCallHandler = ()=>{
        window.open("tel:+919361924485","_blank")
        // if(!props.userProfile){
        //     navigate("/login")
        // }
        // else if(!props.userProfile.premiumUser){    
        //     navigate("/choose-plan")
        // }
        // else{
        //     // CALL OWNER
        //     window.open(`tel:${props.propDetails.ownerPhoneNo}`,"_blank")
        // }
    }
    
    return ( 
        <div className="contact-button-container">
            <button onClick={contactWithCallHandler}><i className="fas fa-phone-alt"></i>Call Now</button>
            <button onClick={contactWhatsappHandler}><img src={whatsapp} alt="whatsapp" /> <span>Chat Now</span></button>
        </div>
     );
}
 
export default ContactButton;