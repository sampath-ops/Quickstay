import AmountCards from "./AmountCards";
import './ChooseAmount.css';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { db,app } from "../../../firebase.config";
import { getAuth } from "firebase/auth";
import { setDoc,doc,serverTimestamp,getDoc} from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ChooseAmount = (props) => {

    const [planAmount,setPlanAmount] = useState();
    const [isValid,setIsValid] = useState(true);

    const auth = getAuth(app);

    const navigate = useNavigate();

    const chooseAmount = [
        {
            type:"MONTHLY",
            amount:199,
            duration:"30 Days"
        },
        {
            type:"HALF YEARLY",
            amount:499,
            duration:"6 Months"
        },
        {
            type:"QUATERLY",
            amount:399,
            duration:"3 Months"
        },
    ]

    const setPlanHandler = (plan)=>{
        setPlanAmount(plan);
    }

    let planType,valid;

    if(planAmount === 199){
        planType = "OneMonth";
        valid = 30;
    }
    else if(planAmount === 499){
        planType = "SixMonth";
        valid = 180;
    }
    else{
        planType = "ThreeMonth";
        valid = 90;
    }

    // load script function
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }


    const payNow = async()=>{

        // Timestamp.fromDate(new Date("May 27, 2022"))

        if(!planAmount){
            setIsValid(false);
            return;
        }

        if(auth.currentUser){

            const docRef = doc(db,"users",auth.currentUser.uid);
            const docSnap = await getDoc(docRef);

            if(!docSnap.exists()){
                navigate("/");
                return;
            }

            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
    
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }
    
            const planData = {
                payment : planAmount
            }

            // creating a new order
            const result = await axios.post("/payment/orders",planData);
    
            if (!result) {
                alert("Server error. Are you online?");
                return;
            }
    
            // Getting the order details back
            const { amount, id: order_id, currency } = result.data;
    
            const options = {
                key: "rzp_live_pYFmL87XheLUWd", // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: docSnap.data().name,
                description: "Upgrading plan",
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };
    
                    await axios.post("/payment/success", data);
                   
                    // alert(result.data.msg);

                    // plan validity
                    var Today = new Date();
                    var numberOfDaysToAdd = valid;
                    var validTill = Today.setDate(Today.getDate() + numberOfDaysToAdd);
                    
                    const subscription = {
                        orderId: order_id,
                        paid:planAmount,
                        phoneNo: auth.currentUser.phoneNumber,
                        planType,
                        source:"website",
                        timestamp: serverTimestamp(),
                        uid: auth.currentUser.uid,
                        validTill: new Date(validTill)
                    }
        
                    await setDoc(doc(db,"subscriptions",order_id),subscription);
                    const user = doc(db,"users",auth.currentUser.uid);
                    await updateDoc(user,{
                        premiumUser:true,
                        validTill: new Date(validTill)
                    })
                    props.fetchUserDataHandler();
                },
                prefill:{
                    name: docSnap.data().name,
                    email: docSnap.data().email,
                    contact: auth.currentUser.phoneNumber,
                },
                theme: {
                    color: "#61dafb",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }
        else{
            navigate("/login");
        }
    
    }

    return ( 
        <div className="chooseamount">

            <div className="amountcards-container">
                {
                chooseAmount.map((plan,index)=>{
                    return(
                    <AmountCards class={`${!isValid && "invalid_plan"}`} setPlan={setPlanHandler} key={index} plantype={plan.type} cost={plan.amount} validity={plan.duration}/>
                    )
                })
                }   
            </div>
            <div className="choose-plan-buttons">
                <button onClick={payNow}>Pay Now</button>
                <button><Link to='/'>Maybe Later</Link></button>
            </div>
        </div>
     );
}
 
export default ChooseAmount;