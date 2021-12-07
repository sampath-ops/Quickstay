import './Location.css';
const Locations = () => {
    const locations = ["Bengaluru","Chennai","Delhi","Gurgaon","Hyderabad","Jaipur","Kolkata","Mumbai","Patna","Pune"];
    return ( 
        <div className="locations">
            {
                locations.map((location,index)=>(
                    <p key={index}>{location}</p>
                ))
            }
        </div>
     );
}
 
export default Locations;