import LinksTemplate from "./LinksTemplate";
const LinksPart1 = () => {
    const links = [
        {
            link:"Home",
            to:"/"
        },
        {
            link:"About",
            to:"/about"
        },
        {
            link:"Blog",
            to:"http://blogs.quickstayrooms.com/",
            newTab:true
        },
        {
            link:"Refer & Earn",
            to:"/"
        },
        {
            link:"List your Property",
            to:"/list-property"
        }
    ]
    return ( 
        <LinksTemplate array={links}/>
     );
}
 
export default LinksPart1;