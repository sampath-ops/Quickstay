import { Link } from "react-router-dom";

const LinksTemplate = (props) => {
    return ( 
        <div >
            {props.array.map((val,index)=>(
                <Link to="#" key={index}>{val}</Link>
            ))}
        </div>
     );
}
 
export default LinksTemplate;