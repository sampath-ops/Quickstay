import DetailsTemplate from "./DetailsTemplate";
import './DetailsTemplate.css';
const Facilities = () => {
    const heading = "FACILITIES";
    const facilities = [
        {
            path:"Facilities/Wifi",
            name:"Wifi"
        },
        {
            path:"Facilities/Waterservice",
            name:"Waterservice"
        },
        {
            path:"Facilities/Bed",
            name:"Bed"
        },
        {
            path:"Facilities/Water Purifier",
            name:"Water Purifier"
        },
        {
            path:"Facilities/Power Backup",
            name:"Power Backup"
        },
        {
            path:"Facilities/Power",
            name:"Power"
        },
        {
            path:"Facilities/Geyser",
            name:"Geyser"
        },
        {
            path:"Facilities/AC",
            name:"AC"
        },
        {
            path:"Facilities/Utensils",
            name:"Utensils"
        },
        {
            path:"Facilities/Induction",
            name:"Induction"
        },
        {
            path:"Facilities/Security",
            name:"Security"
        },
        {
            path:"Facilities/Refrigerator",
            name:"Refrigerator"
        },
    ];

    return ( 
        <DetailsTemplate head={heading} elements={facilities}/>
     );
}
 
export default Facilities;