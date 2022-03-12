import Hero from './Hero/Hero';
import Offer from './Offers/Offer';
import FavouriteStays from './FavouriteStays/FavouriteStays';
import WhyStay from './WhyStay/WhyStay';
// import ReferEarn from './ReferEarn/ReferEarn';
import ExclusiveProperty from './ExclusiveProperty/ExclusiveProperty';
// import Blogs from './Blogs/Blogs';
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
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase.config';
import {Helmet} from "react-helmet";

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
            props.getUserProfile(docSnap.data());
            setShow(false);
        } else {
            console.log("No such document!");
            if(!isOpen){
                setIsOpen(true);
                setShow(false);
            }
        }
    }

    const auth = getAuth(app);
    if(auth.currentUser && show){
        checkUserProfile(auth.currentUser.uid);
    }

    return ( 
        <Main>
            <Helmet>
                <title>QuickStay: PG, Flat, Coliving, Room for rent without brokerage</title>
                <meta name="description" content="Live in the best rental stays like PG, Flat, Coliving or Room without brokerage. Choose from Unfurnished, Semi-Furnished, Furnished long-term accommodations only on QuickStay" />
            </Helmet>
            <PopUpWrap isOpen={isOpen} togglePopup={togglePopup} user={auth.currentUser} closeForm={closeForm}/>
            <Hero searchedProperties={props.searchedProperties}/>
            <Offer/>
            <FavouriteStays/>
            {/* <ReferEarn/> */}
            <ExclusiveProperty addPropDetailsHandler={props.addPropDetailsHandler} getAllProperties={props.allProperties}/>
            <WhyStay/>
            {/* <Blogs/> */}
            <GetToKnow/>
            <Follow/>
            <Find searchedProperties={props.searchedProperties}/>
            <Download/>
            <Locations getAllProperties={props.allProperties}/>   
        </Main>
     );
}
 
export default Home;