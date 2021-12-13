import './SignUp.css';
import KnowLittle from './KnowLittle';
import Button from './Button';
import { useState } from 'react';
const SignUpForm = () => {

    const [enteredName,setEnteredName] = useState('');
    const [enteredEmail,setEnteredEmail] = useState('');
    const [enteredNumber,setEnteredNumber] = useState('');
    const [isValid,setIsValid] = useState(true);

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


    const formSubmitHandler = (event)=>{
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredEmail.trim().length === 0 || enteredNumber.trim().length === 0){
            setIsValid(false);
            return;
        }
    }


    return ( 
        <form className={`signupform ${!isValid && "invalid"}`} onSubmit={formSubmitHandler}>
           <div>
                <h2>SignUp</h2>
                    <div className="input-boxes">
                        <input name="name" type="text" placeholder="Name" value={enteredName} onChange={nameChangeHandler}/>
                        <input name="email" type="email" placeholder="Email" value={enteredEmail} onChange={emailChangeHandler} />
                        <input name="phone" type="number" placeholder="Age" value={enteredNumber} onChange={numberChangeHandler}/>
                    </div>
                <p className='radio-title'>Select your gender</p>
                <div className="gender radio-container">
                        <div>
                            <input type="radio" name="radio" id="Male" value="Male"/>
                            <label htmlFor="Male">Male</label>
                        </div>
                        <div>
                            <input type="radio" name="radio" id="Female" value="Female"/>
                            <label htmlFor="Female">Female</label>
                        </div>
                        <div>
                            <input type="radio" name="radio" id="Others" value="Others"/>
                            <label htmlFor="Others">Others</label>
                        </div>
                </div>
                <p className='radio-title'>You are</p>
                <div className="radio-container you-are  ">
                        <div>
                            <input type="radio" name="radio1" id="Tenant" value="Tenant"/>
                            <label htmlFor="Tenant">Tenant</label>
                        </div>
                        <div>
                            <input type="radio" name="radio1" id="Owner" value="Owner"/>
                            <label htmlFor="Owner">Owner</label>
                        </div>
                        <div>
                            <input type="radio" name="radio1" id="Owner" value="Owner"/>
                            <label htmlFor="Owner">Owner</label>
                        </div>
                </div>
           </div>
           <KnowLittle/>
          <Button type='submit' text='Save'/>
        </form>
     );
}
 
export default SignUpForm;