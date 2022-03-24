import './Download.css';
import playstore from '../../../WebsiteMaterial/Home/Google Play.webp';
import mobileimg from '../../../WebsiteMaterial/Home/DownloadApp.webp';
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
                    <a href="https://play.google.com/store/apps/details?id=com.quickstayrooms.flat_and_flatmates" target="_blank" rel="noreferrer"><img src={playstore} alt="playstore" /></a>
                </div>
            </div>
            <div className="mobile">
                <img src={mobileimg} alt="mobile-design" />
            </div>
        </div>
     );
}
 
export default Download;