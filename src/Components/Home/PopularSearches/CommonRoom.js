import ResultTemplate from "./ResultTemplate";
const CommonRoom = () => {
    const commonRooms = [
        "Room for rent in Bengaluru",
        "Rooms for Rent in Bangalore",
        "Room for rent in Koramangala",
        "Room for rent in Munnekolala",
        "Room for rent in RT Nagar",
        "Room for rent in Sarjapur",
        "Room for rent in Thanisandra",
        "Room for rent in Kadugodi",
        "Room for rent in Hoodi",
        "Room for rent in Yeshwantpur",
        "Room for rent in Kodihalli"
    ]
    return ( 
        <ResultTemplate array = {commonRooms}/>
     );
}
 
export default CommonRoom;