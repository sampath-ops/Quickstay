import './GetToKnow.css';
import { Link } from "react-router-dom";

const GetToKnow = () => {
    return ( 
        <div className="get-to-know">
            <div className="are-you_owner">
                <p>Are you a <br /> home owner?</p>
                <button><Link to="/list-property">List Your Property <i className="fas fa-chevron-right"></i></Link></button>
            </div>
            <div className="get-to-know-row">
                <p>Get Verified <br /> Tenant Leads.</p>
                <p>Get Timely  <br /> Rents.</p>
                <p>Get On-Demand <br /> House Maintenance.</p>
            </div>
        </div>
     );
}
 
export default GetToKnow;