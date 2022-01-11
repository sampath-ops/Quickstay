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
 
  let [documentSnap,setSnap] = useState();

  const searchedPropertiesHandler = (docs)=>{
    setSnap(docs);
  }
    
  return (  
    <Router>
      <GeoLocation/>
      <ScrollToTop>
      <Routes>
         <Route exact path="/" element={<Home searchedProperties={searchedPropertiesHandler}/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/filters" element={<Filter/>}/>
         <Route path="/choose-plan" element={<ChoosePlan/>}/>
         <Route path="/mobile-filter" element={<SlideUpFilter/>}/>
         <Route path="/property-details" element={<PropertyDetails/>}/>
<<<<<<< HEAD
<<<<<<< HEAD
         <Route path="/about" element={<About/>}/>
=======
         <Route path="/properties" element={<Properties />}/>
>>>>>>> properties data is fetched from firebase based on searching result
=======
         <Route path="/properties" element={<Properties snap={documentSnap}/>}/>
>>>>>>> get properties based on location implemented
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router> 
   
  );
}

export default App;
