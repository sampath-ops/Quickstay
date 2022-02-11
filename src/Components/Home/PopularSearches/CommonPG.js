import ResultTemplate from "./ResultTemplate";
const CommonPG = ({CommonPG,getAllProperties,city}) => {
    return ( 
        <ResultTemplate array = {CommonPG} getAllProperties={getAllProperties} city={city}/>
     );
}
 
export default CommonPG;