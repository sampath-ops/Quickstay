import './Hero.css';
import {useState,useEffect,useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import GetGeoDocuments from '../../GetGeoDocuments';

let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null;
            callback();
        }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

function removeGoogleMapScript() {
    let keywords = ['maps.googleapis'];

    //Remove google from BOM (window object)
    window.google = undefined;

    //Remove google map scripts from DOM
    let scripts = document.head.getElementsByTagName("script");
    for (let i = scripts.length - 1; i >= 0; i--) {
        let scriptSource = scripts[i].getAttribute('src');
        if (scriptSource != null) {
            if (keywords.filter(item => scriptSource.includes(item)).length) {
                scripts[i].remove();
            }
        }
    }
}


function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: [], componentRestrictions: { country: "in" } }
    );
    autoComplete.setFields(["address_components", "formatted_address","geometry"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

let addressObject;

async function handlePlaceSelect(updateQuery) {
    addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
}

/* eslint-disable */
const SearchBar = (props) => {

    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [isActive,setIsActive] = useState(false);
    const autoCompleteRef = useRef(null);

    const handleClick = async()=>{
        setIsActive(!isActive);
        if(addressObject){
            const lat = addressObject.geometry.location.lat();
            const lng = addressObject.geometry.location.lng();
            const docs = await GetGeoDocuments(lat,lng,7.45645);
            const latlng = {
                lat,lng
            }
            props.searchedProperties(docs,latlng);
            navigate('/filters'); 
        }
    }

    useEffect(() => {
        loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
        () => handleScriptLoad(setQuery, autoCompleteRef)
        );
        return ()=> removeGoogleMapScript();
    }, []);

    return ( 
        <div className={`searchbar ${isActive ? "search_active" : ""}`}>
            <input type="text" placeholder="Search Locality..." ref={autoCompleteRef}
            onChange={event => setQuery(event.target.value)} value={query}/>
            <button className="search_icon" onClick={handleClick}><i className="fas fa-search"></i></button>
            <button className='search_text' onClick={handleClick}>SEARCH</button>
        </div>
     );
}
 
export default SearchBar;