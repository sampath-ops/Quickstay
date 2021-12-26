import DetailsTemplate from "./DetailsTemplate";
import './DetailsTemplate.css';
const Neighbourhood = () => {
    const neighbourhoods = [
        {
            path:"Neighbourhood/School",
            name:"School"
        },
        {
            path:"Neighbourhood/Gym",
            name:"Gym"
        },
        {
            path:"Neighbourhood/Airport",
            name:"Airport"
        },
        {
            path:"Neighbourhood/Train",
            name:"Train"
        },
        {
            path:"Neighbourhood/Park",
            name:"Park"
        }
    ];
    const heading = "NEIGHBOURHOOD (Under 2 kms)";
    return ( 
        <DetailsTemplate head={heading} elements={neighbourhoods}/>
     );
}
 
export default Neighbourhood;