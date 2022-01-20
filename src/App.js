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
import ListProperty from './Components/Home/GetToKnow/ListProperty/ListProperty';
import ContactUs from './Components/ContactUs/ContactUs';
import GeoLocation from './GeoLocation';
import ScrollToTop from './ScrollToTop';

function App() {

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
         <Route path="/about" element={<About/>}/>
         <Route path="/list-property" element={<ListProperty/>}/>
         <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router> 
   
  );
}

export default App;
