import premiumImage from "../../WebsiteMaterial/AlreadyPremiumUser.png";
import "./PremiumUser.css";

const PremiumUser = (props) => {
    
    const timestamp = props.userProfile.validTill;
    const date = new Date(timestamp.seconds * 1000);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    return ( 
        <div className="premium_user">
            <img src={premiumImage} alt="premium_user" />  
            <p>Till {date.getDate()+" "+months[date.getMonth()]+", "+date.getFullYear()}</p>
            <button className="get_help">Get Help</button>
        </div>
     );
}
 
export default PremiumUser;