import './Location.css';
import { Link } from 'react-router-dom';
const Locations = () => {
    const locations = ["Bengaluru","Chennai","Delhi","Gurgaon","Hyderabad","Jaipur","Kolkata","Mumbai","Patna","Pune","Chennai","Delhi","Gurgaon","Hyderabad","Jaipur","Kolkata"];
    return ( 
        <div className="locations">
            {
                locations.map((location,index)=>(
                    <div  key={index}><Link to="#">{location}</Link></div>
                ))
            }
        </div>
     );
}
 
export default Locations;