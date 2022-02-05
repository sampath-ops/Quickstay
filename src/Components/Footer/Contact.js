const Contact = () => {

    const icons = [
        {
            icon:"fab fa-facebook-f",
            to:"https://www.facebook.com/quickstayrooms"
        },
        {
            icon:"fab fa-instagram",
            to:"https://www.instagram.com/quickstayrooms/"
        },
        {
            icon:"fab fa-whatsapp",
            to:"https://wa.me/+918387868880"
        },
        {
            icon:"fab fa-linkedin-in",
            to:"https://www.linkedin.com/company/quickstayrooms"
        },
        {
            icon:"fab fa-twitter",
            to:"https://twitter.com/quickstayrooms"
        }
    ]

    return ( 
        <div className="contact-ways">
            <span>+91-8387868880</span>
            <span>info@quickstayrooms.com</span>
            <p>STAY IN TOUCH!</p>
            <div className="social-icons">
                {
                    icons.map((icon,index)=>(
                        <a key={index} href={icon.to} target="_blank" rel="noopener noreferrer"><i className={icon.icon} ></i></a>
                    ))
                }
            </div>
        </div>
       
     );
}
 
export default Contact;