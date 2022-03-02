/* eslint-disable */
import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import HowItWorks from "./HowItWorks";
import './ChoosePlan.css';
import ChooseAmount from "./ChooseAmount/ChooseAmount";
import PlanDetails from "./PlanDetails/PlanDetails";
import {Helmet} from "react-helmet";
import PremiumUser from "../PremiumUser/PremiumUser";
import {doc,getDoc} from "firebase/firestore";
import { app,db } from "../../firebase.config";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ChoosePlan = (props) => {
    
    const auth = getAuth(app);
    
    const [userData,setUserData] = useState("");
    const navigate = useNavigate();

    async function fetchUserData(){
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        setUserData(docSnap.data());
    }

    useEffect(()=>{
        if(auth.currentUser){
            fetchUserData();
        }
        else{
            navigate("/login");
        }
    },[]);

    return (
        <MainSub searchedProperties={props.searchedProperties} user={props.user}>
            <Helmet>
                <title>QuickStay</title>
            </Helmet>
            
            {
                userData.premiumUser ? <PremiumUser userProfile={userData}/> : 
            <div>
                <div className="choose-plan">
                    <h3>FIND A <span>RENTAL STAY</span> BY SAVING <span>THOUSANDS</span> ON BROKERAGE!</h3>
                    <PlanDetails/>
                    <ChooseAmount fetchUserDataHandler={fetchUserData}/>
                    <HowItWorks/>
                </div>
                <Locations getAllProperties={props.allProperties}/>
             </div>
            }
        </MainSub>
      );
}
 
export default ChoosePlan;