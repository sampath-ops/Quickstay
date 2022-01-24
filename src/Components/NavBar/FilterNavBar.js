import './FilterNavBar.css';
import logo from '../../WebsiteMaterial/Logo.png'
import { Link } from 'react-router-dom';
import SearchBar from '../Home/Hero/SearchBar';
import './SideBar.css';
import Sidebar from './SideBar';
const FilterNavBar = (props) => {

    return ( 
        <div className='FilterNavBar'>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <SearchBar searchedProperties={props.searchedProperties}></SearchBar>
            <Sidebar pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>
        </div>
     );
}
 
export default FilterNavBar;