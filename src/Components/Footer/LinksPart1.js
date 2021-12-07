import LinksTemplate from "./LinksTemplate";
const LinksPart1 = () => {
    const links = [
        "Home",
        "About",
        "Blog",
        "Refer & Earn",
        "List your Property"
    ]
    return ( 
        <LinksTemplate array={links}/>
     );
}
 
export default LinksPart1;