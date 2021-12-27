import whatsapp from "../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/whatsapp.png";
const ContactButton = () => {
    return ( 
        <div className="contact-button-container">
            <button><i className="fas fa-phone-alt"></i>Call Now</button>
            <button><img src={whatsapp} alt="whatsapp" /> <span>Chat Now</span></button>
        </div>
     );
}
 
export default ContactButton;