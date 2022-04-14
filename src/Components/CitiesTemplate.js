import { useNavigate } from "react-router-dom";
import GetGeoDocuments from "./GetGeoDocuments";
const CitiesTemplate = (props) => {
    const navigate = useNavigate();
    const img = require(`../WebsiteMaterial/Cities/${props.location.name}.webp`);
    const cityPropertyhandler = async(lat,lon)=>{
        const docs = await GetGeoDocuments(lat,lon,7.45645);
        const latlng = {
            lat,lon
        }
        props.searchedProperties(docs,latlng);
        navigate(`/cities/${props.location.name.toLowerCase()}`);
    }
    return(
        <div key={props.index} className="places" onClick={()=>cityPropertyhandler(props.location.lat,props.location.lon)}>
            <img src={img.default} alt={props.location.alter} />
            <p>{props.location.name}</p>
        </div>
    )
}
 
export default CitiesTemplate;