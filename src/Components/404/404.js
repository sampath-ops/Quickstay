import "./404.css";
import notfound from "../../WebsiteMaterial/404/404.svg";
import {Link} from "react-router-dom";
import MainSub from "../NavBar/MainSub";
const PageNotFound = () => {
    return ( 
        <MainSub>
            <div className="pagenotfound">
                <img src={notfound} alt="404" />
                <div className="go_home"><Link to="/"><button>GO HOME</button></Link></div>
            </div>
        </MainSub>
     );
}
 
export default PageNotFound;