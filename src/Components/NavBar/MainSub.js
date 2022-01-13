import FilterNavBar from "./FilterNavBar";
import PopUpWrap from "../PopUp/PopUpWrap";
import { useState } from "react";
const MainSub = (props) => {
   
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const openSignUp = (bool)=>{
        setIsOpen(bool);
    }

    return ( 
        <div>
            <PopUpWrap isOpen={isOpen} togglePopup={togglePopup} />
            <FilterNavBar searchedProperties={props.searchedProperties} openSignUp={openSignUp}/>
            {props.children} 
        </div>
     );
}
 
export default MainSub;