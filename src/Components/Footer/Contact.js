const Contact = () => {
    const icons = [
        "fab fa-facebook-f",
        "fab fa-instagram",
        "fab fa-whatsapp",
        "fab fa-linkedin-in",
        "fab fa-twitter"
    ]
    return ( 
        <div className="contact-ways">
            <span>+91-8387868880</span>
            <span>info@quickstayrooms.com</span>
            <p>STAY IN TOUCH!</p>
            <div className="social-icons">
                {
                    icons.map((icon,index)=>(
                        <i className={icon} key={index}></i>
                    ))
                }
            </div>
        </div>
       
     );
}
 
export default Contact;