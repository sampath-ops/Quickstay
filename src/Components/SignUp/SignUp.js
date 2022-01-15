import SignUpForm from "./SignUpForm";
const Signin = (props) => {
	return ( 
				<div className="signUp">
				<SignUpForm user={props.user} closeForm={props.closeForm}/>
				</div>
	 );
}
 
export default Signin;