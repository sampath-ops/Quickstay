import LinksTemplate from "./LinksTemplate";
const LinksPart2 = () => {

    const links = [
        {
            link:"Contact Us",
            to:"/contact"
        },
        {
            link:"Terms & Conditions",
            to:"/terms",
            newTab:true
        },
        {
            link:"Privacy Policy",
            to:"/privacy-policy",
            newTab:true
        },
        {
            link:"Refund Policy",
            to:"/refund",
            newTab:true
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