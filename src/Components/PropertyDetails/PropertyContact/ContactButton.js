import { useNavigate } from "react-router-dom";
import whatsapp from "../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/whatsapp.png";
import { app,db } from "../../../firebase.config";
import { getAuth } from "firebase/auth";
import {doc,getDoc} from "firebase/firestore"
const ContactButton = (props) => {

    const auth = getAuth(app);
   
    const navigate = useNavigate();

    const contactWhatsappHandler = async()=>{    

        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
    
        if(!auth.currentUser){
            navigate("/login")
        }
        else if(!docSnap.exists() || !docSnap.data().premiumUser){    
            navigate("/choose-plan")
        }
        else{
            // contact owner if user is logged in and user should be a premium user
            window.open(`https://wa.me/${props.propDetails.ownerPhoneNo}`,"_blank");
        }
    }

    const contactWithCallHandler = ()=>{
        
        if(!props.userProfile){
            navigate("/login")
        }
        else if(!props.userProfile.premiumUser){    
            navigate("/choose-plan")
        }
        else{
            // CALL OWNER
            window.open(`tel:${props.propDetails.ownerPhoneNo}`,"_blank")
        }
    }
    
    return ( 
        <div className="contact-button-container">
            <button onClick={contactWithCallHandler}><i className="fas fa-phone-alt"></i>Call Now</button>
            <button onClick={contactWhatsappHandler}><img src={whatsapp} alt="whatsapp" /> <span>Chat Now</span></button>
        </div>
     );
}
 
export default ContactButton;