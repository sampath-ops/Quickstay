import "./404.css";
import notfound from "../../WebsiteMaterial/404/404.svg";
import {Link} from "react-router-dom";
const PageNotFound = () => {
    return ( 
        <div className="pagenotfound">
                <img src={notfound} alt="404" />
                <div><Link to="/"><button>GO HOME</button></Link></div>
        </div>
     );
}
 
export default PageNotFound;