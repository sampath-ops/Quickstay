import { Link } from "react-router-dom";
const ResultTemplate = (props) => {
    return ( 
        <div className="pop-container">
            {props.array.map((val,index)=>(
                <Link to="#" key={index}>{val}</Link>
            ))}
        </div>
    );
}
 
export default ResultTemplate;