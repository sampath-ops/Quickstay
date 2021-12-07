import ResultTemplate from "./ResultTemplate";
const CommonPG = () => {
    const commonPG = [
        "PG in Bengaluru",
        "PG in HSR Layout",
        "PG in Bellandur",
        "PG in Electronic City",
        "PG in BTM Layout",
        "PG in Koramangala",
        "PG in Manyata",
        "PG in Marathahalli",
        "PG in JP Nagar"
    ]
    return ( 
        <ResultTemplate array = {commonPG}/>
     );
}
 
export default CommonPG;