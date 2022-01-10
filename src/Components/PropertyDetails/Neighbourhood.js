import DetailsTemplate from "./DetailsTemplate";
import './DetailsTemplate.css';
const Neighbourhood = (props) => {
    const neighbourhoods = props.neighbourhoods;
    const heading = "NEIGHBOURHOOD (Under 2 kms)";
    return ( 
        <DetailsTemplate head={heading} facilitiesAndNeigh={neighbourhoods} />
     );
}
 
export default Neighbourhood;