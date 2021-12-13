import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Main from './Components/NavBar/Main';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login-Otp/Login';
import Otp from './Components/Login-Otp/Otp';
function App() {
  return (  
    <Router>
      <Main/>
      <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/otp" element={<Otp/>}></Route>
      </Routes>
      <Footer/>
    </Router> 
   
  );
}

export default App;
