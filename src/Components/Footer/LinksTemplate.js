import { Link } from "react-router-dom";

const LinksTemplate = (props) => {
    return ( 
        <div >
            {props.array.map((val,index)=>(
                <Link to={val.to} key={index}>{val.link}</Link>
            ))}
        </div>
     );
}
 
export default LinksTemplate;