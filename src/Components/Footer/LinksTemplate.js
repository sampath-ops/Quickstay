import { Link } from "react-router-dom";

const LinksTemplate = (props) => {
    console.log(props.array[0].to)
    return ( 
        <div >
            {props.array.map((val,index)=>(
                <Link to={val.to} key={index}>{val.link}</Link>
            ))}
        </div>
     );
}
 
export default LinksTemplate;