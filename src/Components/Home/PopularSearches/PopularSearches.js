import './PopularSearches.css';
import SearchResult from "./SearchResult";
import CommonRoom from "./CommonRoom";
import CommonPG from "./CommonPG";
import cityLinks from './CityLink';
const PopularSearches = ({cityName,getAllProperties}) => { 

    return ( 
        <div className="popularSearches">
            <div className="concat-box">
                <p>Popular Searches</p>
                <div className="popular-searches-container">

                    <SearchResult SearchResult={cityName ? cityLinks[cityName].SearchResult:cityLinks["Bengaluru"].SearchResult} getAllProperties={getAllProperties} city={cityName}/>

                    <CommonRoom  CommonRoom={cityName ? cityLinks[cityName].CommonRoom:cityLinks["Bengaluru"].CommonRoom} getAllProperties={getAllProperties} city={cityName}/>

                    <CommonPG CommonPG={cityName ? cityLinks[cityName].CommonPG:cityLinks["Bengaluru"].CommonPG} getAllProperties={getAllProperties} city={cityName}/>

                </div>
            </div>
        </div>
     );
}
 
export default PopularSearches;