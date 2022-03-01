import premiumImage from "../../WebsiteMaterial/AlreadyPremiumUser.png";
import "./PremiumUser.css";
const PremiumUser = () => {
    return ( 
        <div className="premium_user">
            <img src={premiumImage} alt="premium_user" />  
            <p>Till 28 Mar, 2022</p>
            <button className="get_help">Get Help</button>
        </div>
     );
}
 
export default PremiumUser;