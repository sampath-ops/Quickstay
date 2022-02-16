import './Download.css';
import playstore from '../../../WebsiteMaterial/Google Play.png';
import mobileimg from '../../../WebsiteMaterial/Home/DownloadApp.png';
const Download = () => {
    return ( 
        <div className="download">
            <div className="slogan">
                <div>
                    <p>Book Long Stay Anytime, Anywhere</p> <p style={{fontSize:"34px"}}>with QuickStay!</p>
                </div> 
                <img src={mobileimg} alt="mobile-design" />
                <div className="playstore-button">
                    <p>Download the App.</p>
                    <img src={playstore} alt="playstore" />
                </div>
            </div>
            <div className="mobile">
                <img src={mobileimg} alt="mobile-design" />
            </div>
        </div>
     );
}
 
export default Download;