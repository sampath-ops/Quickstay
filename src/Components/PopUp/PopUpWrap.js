import { useState } from 'react';
import Popup from './Popup';
import Signin from '../SignUp/SignUp';
const PopUpWrap = () => {

    const [isOpen, setIsOpen] = useState(true);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    
    if(isOpen){
        document.body.classList.add('noscroll');
    }
    else{
        document.body.classList.remove('noscroll');
    }

    return ( 
       <>
        {isOpen && <Popup
        content={<Signin/>}
        handleClose={togglePopup}
        />}
       </>
     );
}
 
export default PopUpWrap;