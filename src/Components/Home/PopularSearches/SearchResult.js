import ResultTemplate from "./ResultTemplate";
const SearchResult = () => {

    const searchResults = ["PG for women in Bengaluru","PG for men in Bengaluru",
    "PG for couple in Bengaluru"];

    return ( 
       <ResultTemplate array = {searchResults}/>
     );
}
 
export default SearchResult;