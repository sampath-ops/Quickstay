import ResultTemplate from "./ResultTemplate";
const CommonRoom = ({CommonRoom,getAllProperties,city}) => {
    
    return ( 
        <ResultTemplate array = {CommonRoom} getAllProperties={getAllProperties} city={city}/>
     );
}
 
export default CommonRoom;