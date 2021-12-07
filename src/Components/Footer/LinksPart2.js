import LinksTemplate from "./LinksTemplate";
const LinksPart2 = () => {
    const links = [
        "Contact Us",
        "Terms & Conditions",
        "Privacy Policy",
        "Refund Policy",
        "FAQs"
    ]
    return ( 
        <LinksTemplate array={links}/>
     );
}
 
export default LinksPart2;