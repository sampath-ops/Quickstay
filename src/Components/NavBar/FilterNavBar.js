import './FilterNavBar.css';
import logo from '../../WebsiteMaterial/Logo.png'
import { Link } from 'react-router-dom';
import SearchBar from '../Home/Hero/SearchBar';
import { useState } from 'react';
import { app } from '../../firebase.config';
import { getAuth,signOut } from 'firebase/auth';
import PopOver from './PopOver';
const FilterNavBar = (props) => {

    const [showProfile,setShowProfile] = useState(false);

    const auth = getAuth(app);

    if(!showProfile && auth.currentUser){
        setShowProfile(true);
    }

    //SIGNOUT
    const signout = ()=>{
    signOut(auth).then(() => {
        console.log("signed out")
        setShowProfile(false);
    }).catch((error) => {
        // An error happened.
    });
    }

    return ( 
        <div className='FilterNavBar'>
            <Link to="/"><img src={logo} alt="logo" /></Link>
           <SearchBar searchedProperties={props.searchedProperties}></SearchBar>
           <div className={`access-methods ${showProfile ? "hide-access-methods":""}`}>
               <Link to="/login">Login</Link>/ 
               <span onClick={props.openSignUp}>Signup</span>
           </div>
            {
                showProfile && <PopOver signout={signout}/>
            }
        </div>
     );
}
 
export default FilterNavBar;