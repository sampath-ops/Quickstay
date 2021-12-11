import './SignUp.css';
import KnowLittle from './KnowLittle';
const SignUpForm = () => {
    
    return ( 
        <form className="signupform">
           <div>
                <h2>SignUp</h2>
                    <div className="input-boxes">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="tel" placeholder="Age"/>
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
           <div className="submit-btn">
                        <button>Save</button>
           </div>
        </form>
     );
}
 
export default SignUpForm;