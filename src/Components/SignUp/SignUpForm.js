import './SignUp.css';
import KnowLittle from './KnowLittle';
import Button from './Button';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase.config';
const SignUpForm = (props) => {

    const [enteredName,setEnteredName] = useState('');
    const [enteredEmail,setEnteredEmail] = useState('');
    const [enteredNumber,setEnteredNumber] = useState('');
    const [isValid,setIsValid] = useState(true);
    const [gender,setGender] = useState('');
    const [type,setType] = useState('');
    const [loading,setLoading] = useState(false);

    const nameChangeHandler = (event)=>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredName(event.target.value);
    }

    const emailChangeHandler = (event)=>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredEmail(event.target.value);
    }

    const numberChangeHandler = (event)=>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setEnteredNumber(event.target.value);
    }

    const genderChangeHandler = (event)=>{
        setGender(event.target.value);
    }

    const typeChangeHandler = (event) => {
        setType(event.target.value);
    }

    const [interest,setInterest] = useState([]);

    // get favourites of user
    const getInteresthandler = (fav)=>{ 
         setInterest((prevState)=>{
            return prevState.includes(fav) ? prevState.filter(i => i!== fav) : [...prevState,fav]
        })               
    }

    const formSubmitHandler = async(event)=>{
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredEmail.trim().length === 0 || enteredNumber.trim().length === 0 || gender.trim().length === 0 || type.trim().length === 0){
            setIsValid(false);
            return;
        }
        setLoading(true);
        const profile = {
            name:enteredName,
            email:enteredEmail,
            age:enteredNumber,
            gender:gender,
            premiumUser: false,
            type:type,
            interests:interest,
            uid:props.user.uid,
            phoneNo:props.user.phoneNumber
        }
        console.log(profile);
        // create document with uid 
        await setDoc(doc(db, "users", props.user.uid),profile);
        props.closeForm();
    }


    return ( 
        <form className={`signupform ${!isValid && "invalid"}`} onSubmit={formSubmitHandler}>
           <div>
                <h2>SignUp</h2>
                    <div className="input-boxes">
                        <input name="name" type="text" placeholder="Name" value={enteredName} onChange={nameChangeHandler}/>
                        <input name="email" type="email" placeholder="Email" value={enteredEmail} onChange={emailChangeHandler} />
                        <input name="phone" type="tel" placeholder="Age" value={enteredNumber} onChange={numberChangeHandler}/>
                    </div>
                <p className='radio-title'>Select your gender</p>
                <div className="gender radio-container">
                        <div>
                            <input type="radio" name="radio" id="Male" value="Male" onChange={genderChangeHandler}/>
                            <label htmlFor="Male">Male</label>
                        </div>
                        <div>
                            <input type="radio" name="radio" id="Female" value="Female"  onChange={genderChangeHandler}/>
                            <label htmlFor="Female">Female</label>
                        </div>
                        <div>
                            <input type="radio" name="radio" id="Others" value="Others"  onChange={genderChangeHandler}/>
                            <label htmlFor="Others">Others</label>
                        </div>
                </div>
                <p className='radio-title'>You are</p>
                <div className="radio-container you-are  ">
                        <div>
                            <input type="radio" name="radio1" id="Tenant" value="Tenant" onChange={typeChangeHandler}/>
                            <label htmlFor="Tenant">Tenant</label>
                        </div>
                        <div>
                            <input type="radio" name="radio1" id="Owner" value="Owner" onChange={typeChangeHandler}/>
                            <label htmlFor="Owner">Owner</label>
                        </div>
                        <div>
                            <input type="radio" name="radio1" id="Owner" value="Owner" onChange={typeChangeHandler}/>
                            <label htmlFor="Owner">Owner</label>
                        </div>
                </div>
           </div>
           <KnowLittle getInterest={getInteresthandler}/>
          <Button type='submit' text='Save' load={loading}/>
        </form>
     );
}
 
export default SignUpForm;