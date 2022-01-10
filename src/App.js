/* eslint-disable */
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SignUp from './Components/SignUp/SignUp';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login-Otp/Login';
import Filter from './Components/Filter/Filter';
import ChoosePlan from './Components/ChoosePlan/ChoosePlan';
import SlideUpFilter from './Components/Filter/FilterOptionForMobile/SlideUpFilter';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
import GeoLocation from './GeoLocation';
import ScrollToTop from './ScrollToTop';
import Properties from './Components/Properties/Properties';
import { useState } from 'react';

function App() {

  // const [placesProperties,setPlacesProperties] =useState([]);
  const searchedPropertiesHandler = (docs)=>{
    docs.onSnapshot(snapshot => {
      snapshot.docs.map(doc=>{
        console.log(doc.data());
        // setPlacesProperties([...placesProperties,doc.data()]);
      })
    })
  }
<<<<<<< HEAD
=======
    
  const [propertyDetails,setPropertyDetails] = useState();

  const onAddPropertyDetails = (property)=>{
    setPropertyDetails(property);
  }
  
>>>>>>> properties details from firebase integrated with frontend

  return (  
    <Router>
      <GeoLocation/>
      <ScrollToTop>
      <Routes>
         <Route exact path="/" element={<Home searchedProperties={searchedPropertiesHandler} addPropDetailsHandler={onAddPropertyDetails}/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/filters" element={<Filter/>}/>
         <Route path="/choose-plan" element={<ChoosePlan/>}/>
         <Route path="/mobile-filter" element={<SlideUpFilter/>}/>
<<<<<<< HEAD
         <Route path="/property-details" element={<PropertyDetails/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/properties" element={<Properties />}/>
=======
         <Route path="/property-details" element={<PropertyDetails propDetails={propertyDetails}/>}/>
         <Route path="/properties" element={<Properties snap={documentSnap} addPropDetailsHandler={onAddPropertyDetails}/>}/>
>>>>>>> properties details from firebase integrated with frontend
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router> 
   
  );
}

export default App;
