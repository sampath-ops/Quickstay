import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login-Otp/Login';
import Filter from './Components/Filter/Filter';
import ChoosePlan from './Components/ChoosePlan/ChoosePlan';

function App() {
  return (  
    <Router>
      <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/filters" element={<Filter/>}/>
         <Route path="/choose-plan" element={<ChoosePlan/>}/>
      </Routes>
      <Footer/>
    </Router> 
   
  );
}

export default App;
