import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/NavBar/Main';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
function App() {
  return (  
    <Router>
      <Main/>
      <Routes>
         <Route exact path="/" element={<Home />}/>
      </Routes>
      <Footer/>
    </Router> 
   
  );
}

export default App;
