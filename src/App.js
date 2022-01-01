import './App.css';
import Home from './Components/Home/Home';
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
// import db from './firebase.config';
// import React,{useState,useEffect} from 'react';

function App() {

  // const [property,setProperty]=useState([]);
  // const fetchProperty = async ()=>{
  //   const response = db.collection('properties');
  //   const data = await response.get();
   
  //   data.docs.forEach(item=>{
  //     setProperty([...property,item.data()]);
  //     console.log(item.data());
  //   })
    
  // }
  // useEffect(()=>{
  //   fetchProperty();
  // },[])

  return (  
    <Router>
      <GeoLocation/>
      <ScrollToTop>
      <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/filters" element={<Filter/>}/>
         <Route path="/choose-plan" element={<ChoosePlan/>}/>
         <Route path="/mobile-filter" element={<SlideUpFilter/>}/>
         <Route path="/property-details" element={<PropertyDetails/>}/>
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router> 
   
  );
}

export default App;
