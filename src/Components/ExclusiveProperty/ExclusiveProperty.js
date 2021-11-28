import Card from "./Card";
import Description from "../Description";
import './ExclusiveProperty.css';
const ExclusiveProperty = () => {
    const heading = ["Quick Stay Exclusive","Properties"]
    const description = "We won't show you photos that are too good to be true. Find the best room for rent near you!"
    return ( 
        <div className="exclusive">
            <Description head={heading} para={description}/>
            <Card/>
        </div>
     );
}
 
export default ExclusiveProperty;