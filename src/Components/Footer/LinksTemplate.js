import { Link } from "react-router-dom";

const LinksTemplate = (props) => {
    return ( 
        <div >
            {props.array.map((val,index)=>{
                if(val.link === "Blog"){
                    return(
                     <a href={val.to} key={index} target={val.newTab ? "_blank":""} rel="noreferrer">{val.link}</a>
                    )
                }
                else{
                   return(
                     <Link to={val.to} key={index} target={val.newTab ? "_blank":""} rel="noreferrer">{val.link}</Link>
                   )
                }
        })}
        </div>
     );
}
 
export default LinksTemplate;