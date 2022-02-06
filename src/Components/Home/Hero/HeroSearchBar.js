import Achievements from "./Achievements";
import SearchBar from "./SearchBar";
const HeroSearchBar = (props) => {
    return ( 
        <div className="search-bar-container">
            <Achievements/>
            <SearchBar searchedProperties={props.searchedProperties}/>
        </div>
     );
}
 
export default HeroSearchBar;