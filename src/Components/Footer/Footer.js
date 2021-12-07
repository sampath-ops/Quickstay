import LinksPart1 from "./LinksPart1";
import LinksPart2 from "./LinksPart2";
import Contact from "./Contact";
import logo from "../../WebsiteMaterial/footer-logo.png";
import './Footer.css';
const Footer = () => {
    return ( 
        <div className="Footer">
            <img src={logo} alt="quickstay-logo" />
            <LinksPart1/>
            <LinksPart2/>
            <Contact/>
        </div>
     );
}
 
export default Footer;