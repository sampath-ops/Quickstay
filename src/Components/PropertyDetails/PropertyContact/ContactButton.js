import { useNavigate } from "react-router-dom";
import whatsapp from "../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/whatsapp.png";
import { app,db } from "../../../firebase.config";
import { getAuth } from "firebase/auth";
import {doc, getDoc, updateDoc} from "firebase/firestore"
const ContactButton = (props) => {
 
    const auth = getAuth(app);
    
    const navigate = useNavigate();

    const contactWhatsappHandler = async()=>{    
    
        if(auth.currentUser){

            const docRef = doc(db, "users", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            
            if(!docSnap.exists() || !docSnap.data().premiumUser){    
                navigate("/choose-plan")
            }
            else{

                let currentTime;
                let planValidity;
                
                if(docSnap.data()){
                    currentTime = new Date();
                    planValidity = new Date(docSnap.data().validTill.seconds * 1000);
                    // console.log(currentTime.getTime(),planValidity.getTime());
                }

                // check plan exipiration
                 if(planValidity.getTime() < currentTime.getTime()){
                    alert("Plan Expired :(");
                    const docRef = doc(db, "users", auth.currentUser.uid);
                    await updateDoc(docRef,{
                        premiumUser:false
                    }).then(()=>{
                        navigate("/choose-plan");
                    });
                    
                    return;
                }
                else{
                    // contact owner if user is logged in and user should be a premium user
                    window.open(`https://wa.me/${props.propDetails.ownerPhoneNo}`,"_blank");
                }
            }
        }
        else{
            navigate("/login")
        }

    }

    const contactWithCallHandler = async()=>{


        if(auth.currentUser){

            const docRef = doc(db, "users", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);

            if(!docSnap.exists() || !docSnap.data().premiumUser){    
                navigate("/choose-plan")
            }
            else{
                // CALL OWNER

                let currentTime;
                let planValidity;
                
                if(docSnap.data()){
                    currentTime = new Date();
                    planValidity = new Date(docSnap.data().validTill.seconds * 1000);
                    // console.log(currentTime.getTime(),planValidity.getTime());
                }

                // check plan exipiration
                if(planValidity.getTime() < currentTime.getTime()){
                    alert("Plan Expired :(");
                    navigate("/choose-plan");
                    return;
                }
               else{
                    window.open(`tel:${props.propDetails.ownerPhoneNo}`,"_blank")
               }
            }
        }
        else{
            navigate("/login")
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