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
import GeoLocation from './GeoLocation';
import ScrollToTop from './ScrollToTop';
import { useState } from 'react';

function App() {

    const [documentSnap,setDocumentSnap] = useState([]);
    const [user,setUser] = useState();

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

    // PROPERTY DETAILS
    const [propertyDetails,setPropertyDetails] = useState();

    const onAddPropertyDetails = (property)=>{
      setPropertyDetails(property);
    }
  
    //GET USERID ON LOGIN
    const getUserIdHandler = (userDoc)=>{
      setUser({
        id: userDoc.uid,
        phn: userDoc.phoneNumber
      });
    }


  return (  
    <Router>
      <GeoLocation/>
      <ScrollToTop>
      <Routes>
         <Route exact path="/" element={<Home user={user} allProperties={allProperties} searchedProperties={searchedPropertiesHandler} addPropDetailsHandler={onAddPropertyDetails}/>}/>
         <Route path="/login" element={<Login getUserId={getUserIdHandler}/>}/>
         <Route path="/filters" element={<Filter snap={documentSnap} addPropDetailsHandler={onAddPropertyDetails} searchedProperties={searchedPropertiesHandler} user={user} searchLatlng={searchLatlng}/>}/>
         <Route path="/choose-plan" element={<ChoosePlan searchedProperties={searchedPropertiesHandler} user={user}/>}/>
         <Route path="/about" element={<About searchedProperties={searchedPropertiesHandler} user={user}/>}/>
         <Route path="/property-details" element={<PropertyDetails propDetails={propertyDetails}   searchedProperties={searchedPropertiesHandler}/>} user={user}/>
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router> 
   
  );
}

export default App;
