import './FilterNavBar.css';
import logo from '../../WebsiteMaterial/Logo.png'
import { Link } from 'react-router-dom';
import SearchBar from '../Home/Hero/SearchBar';
const FilterNavBar = (props) => {
    return ( 
        <div className='FilterNavBar'>
            <Link to="/"><img src={logo} alt="logo" /></Link>
           <SearchBar searchedProperties={props.searchedProperties}></SearchBar>
           <div className="access-methods">
               <Link to="/login">Login</Link>/ 
               <span onClick={props.openSignUp}>Signup</span>
           </div>
        </div>
     );
}
 
export default FilterNavBar;