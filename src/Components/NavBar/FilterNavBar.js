import './FilterNavBar.css';
import logo from '../../WebsiteMaterial/Logo.png'
import { Link } from 'react-router-dom';
const FilterNavBar = () => {
    return ( 
        <div className='FilterNavBar'>
            <img src={logo} alt="logo" />
           <div className="searchbar filter-searchbar">
                <input type="text" placeholder="Search Locality..." />
                <button className="search_icon"><i className="fas fa-search"></i></button>
                <button className='search_text'>SEARCH</button>
           </div>
           <div className="access-methods">
               <Link to="/login">Login</Link>/ 
               <Link to="/sigup">Signup</Link>
           </div>
        </div>
     );
}
 
export default FilterNavBar;