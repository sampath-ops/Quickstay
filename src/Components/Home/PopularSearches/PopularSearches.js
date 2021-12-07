import Locations from "./Locations/Location";
import './PopularSearches.css';
import SearchResult from "./SearchResult";
import CommonRoom from "./CommonRoom";
import CommonPG from "./CommonPG";

const PopularSearches = () => {
    return ( 
        <div className="popularSearches">
            <Locations/>
            <div className="concat-box">
                <p>Popular Searches</p>
                <div className="popular-searches-container">
                    <SearchResult/>
                    <CommonRoom/>
                    <CommonPG/>
                </div>
            </div>
        </div>
     );
}
 
export default PopularSearches;