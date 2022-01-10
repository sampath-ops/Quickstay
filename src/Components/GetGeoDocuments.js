import db from '../firebase.config';
import geohash from "ngeohash";
const GetGeoDocuments = async(latitude,longitude,distance)=>{
    const lat = 0.0144927536231884; // degrees latitude per mile
    const lon = 0.0181818181818182; // degrees longitude per mile
  
    const lowerLat = latitude - lat * distance;
    const lowerLon = longitude - lon * distance;
  
    const upperLat = latitude + lat * distance;
    const upperLon = longitude + lon * distance;
  
    const lower = geohash.encode(lowerLat, lowerLon);
    const upper = geohash.encode(upperLat, upperLon);
  
    const response = db
                .collection("properties")
                .where("geolocation", ">=",lower)
                .where("geolocation", "<=",upper)
                .where("activeStatus","==",true)
                .where("approved","==",true)
    const docs = await response.get();
    return docs;
}
 
export default GetGeoDocuments;