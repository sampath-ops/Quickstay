import DetailsTemplate from "./DetailsTemplate";
import './DetailsTemplate.css';
const Facilities = (props) => {

    const heading = "FACILITIES";

    return ( 
        <>
        {props.facilities && <DetailsTemplate head={heading} facilitiesAndNeigh={props.facilities}/>}
        </>
     );
}
 
export default Facilities;