/* eslint-disable */
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login-Otp/Login';
import Filter from './Components/Filter/Filter';
import ChoosePlan from './Components/ChoosePlan/ChoosePlan';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
import ListProperty from './Components/Home/GetToKnow/ListProperty/ListProperty';
import ContactUs from './Components/ContactUs/ContactUs';
import GeoLocation from './GeoLocation';
import ScrollToTop from './ScrollToTop';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {

    const [documentSnap,setDocumentSnap] = useState([]);

    //  GET ALL DOCUMENTS SNAP
    const allProperties = (docs)=>{
      setDocumentSnap(docs);
    }

    const [searchLatlng,setSearchLatlng] = useState()
    // GET DOCUMENTS ON SEARCH
    const searchedPropertiesHandler = (docs,latlng)=>{
      setDocumentSnap(docs);
      setSearchLatlng(latlng);
    }

    // GET USER PROFILE ON LOGIN
    const [userProfile,setUserProfile] = useState();

    const getUserProfileHandler = (profile)=>{
        setUserProfile(profile);
    }
  

  return (  
    <Router>
      <GeoLocation/>
      <ScrollToTop>
      <Routes id="outer-container">
         <Route exact path="/" element={<Home getUserProfile={getUserProfileHandler} allProperties={allProperties} searchedProperties={searchedPropertiesHandler} />}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/filters" element={<Filter snap={documentSnap} searchedProperties={searchedPropertiesHandler} searchLatlng={searchLatlng} allProperties={allProperties}/>}/>
         <Route path="/choose-plan" element={<ChoosePlan searchedProperties={searchedPropertiesHandler} allProperties={allProperties}/>}/>
         <Route path="/about" element={<About searchedProperties={searchedPropertiesHandler} allProperties={allProperties}/>}/>
         <Route path="/property-details/:id" element={<PropertyDetails  searchedProperties={searchedPropertiesHandler} userProfile={userProfile} allProperties={allProperties}/>}/>
         <Route path="/list-property" element={<ListProperty searchedProperties={searchedPropertiesHandler} allProperties={allProperties}/>}/>
         <Route path="/contact" element={<ContactUs searchedProperties={searchedPropertiesHandler} allProperties={allProperties}/>}/>
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router> 
   
  );
}

export default App;
