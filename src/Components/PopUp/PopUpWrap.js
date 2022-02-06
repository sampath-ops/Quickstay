import Popup from './Popup';
import Signin from '../SignUp/SignUp';
const PopUpWrap = (props) => {

    if(props.isOpen){
        document.body.classList.add('noscroll');
    }
    else{
        document.body.classList.remove('noscroll');
    }

    return ( 
       <>
        {props.isOpen && <Popup
        content={<Signin user={props.user} closeForm={props.closeForm}/>}
        handleClose={props.togglePopup}
        />}
       </>
     );
}
 
export default PopUpWrap;