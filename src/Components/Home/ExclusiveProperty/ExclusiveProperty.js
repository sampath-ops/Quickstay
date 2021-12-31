import Card from "./Card";
import Description from "../Description";
import './ExclusiveProperty.css';
import { Link } from "react-router-dom";
const ExclusiveProperty = () => {
    const heading = ["Quick Stay Exclusive","Properties"]
    const description = "We won't show you photos that are too good to be true. Find the best room for rent near you!"
    return ( 
        <div className="exclusive">
            <Description head={heading} para={description}/>
            <Card/>
            <div><Link to="/filters">See all <i className="fas fa-chevron-right"></i></Link></div>
        </div>
     );
}
 
export default ExclusiveProperty;