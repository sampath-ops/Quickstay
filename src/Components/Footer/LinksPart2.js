import LinksTemplate from "./LinksTemplate";
const LinksPart2 = () => {

    const links = [
        {
            link:"Contact Us",
            to:"/contact"
        },
        {
            link:"Terms & Conditions",
            to:"/"
        },
        {
            link:"Privacy Policy",
            to:"/privacy-policy"
        },
        {
            link:"Refund Policy",
            to:"/"
        },
        {
            link:"FAQs",
            to:"/"
        }
    ]
    return ( 
        <LinksTemplate array={links}/>
     );
}
 
export default LinksPart2;