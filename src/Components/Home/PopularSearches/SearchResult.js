import ResultTemplate from "./ResultTemplate";
const SearchResult = ({SearchResult,getAllProperties,city}) => {

    return (  
        <ResultTemplate array = {SearchResult} getAllProperties={getAllProperties} city={city}/>
     );
}
 
export default SearchResult;