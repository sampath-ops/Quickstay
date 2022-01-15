import Hero from './Hero/Hero';
import Offer from './Offers/Offer';
import FavouriteStays from './FavouriteStays/FavouriteStays';
import WhyStay from './WhyStay/WhyStay';
import ReferEarn from './ReferEarn/ReferEarn';
import ExclusiveProperty from './ExclusiveProperty/ExclusiveProperty';
import Blogs from './Blogs/Blogs';
import GetToKnow from './GetToKnow/GetToKnow';
import Follow from './FollowAndFind/Follow';
import Find from './FollowAndFind/Find';
import Download from './Download/Download';
import Locations from './PopularSearches/Locations/Location';
import Main from '../NavBar/Main';
import PopUpWrap from '../PopUp/PopUpWrap';
import { useState } from 'react';
import { db } from '../../firebase.config';
import { doc, getDoc } from "firebase/firestore";

const Home = (props) => {

    const [isOpen, setIsOpen] = useState();
    const [show,setShow] = useState(true);

    const closeForm = ()=>{
        setIsOpen(false);
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    //CHECK DOCUMENT EXIST WITH UID IN USERS COLLECTION
    const checkUserProfile = async(uid)=>{
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
            if(!isOpen){
                setIsOpen(true);
                setShow(false);
            }
        }
    }

    if(props.user && show){
        checkUserProfile(props.user.id);
    }

    return ( 
        <Main>
            <PopUpWrap isOpen={isOpen} togglePopup={togglePopup} user={props.user} closeForm={closeForm}/>
            <Hero searchedProperties={props.searchedProperties}/>
            <Offer/>
            <FavouriteStays/>
            <ReferEarn/>
            <ExclusiveProperty addPropDetailsHandler={props.addPropDetailsHandler} getAllProperties={props.allProperties}/>
            <WhyStay/>
            <Blogs/>
            <GetToKnow/>
            <Follow/>
            <Find/>
            <Download/>
            <Locations/>   
        </Main>
     );
}
 
export default Home;