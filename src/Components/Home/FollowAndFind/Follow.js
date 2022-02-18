import './Follow.css';
// import SocialLogos from './SocialLogos';
const Follow = () => {
    const icons = [
        {
            name:"Instagram",
            alter:"insta-icon",
            to:"https://www.instagram.com/quickstayrooms/"
        },
        {
            name:"Facebook",
            alter:"facebook-icon",
            to:"https://www.facebook.com/quickstayrooms"
        },
        {
            name:"LinkedIn",
            alter:"LinkedIn-icon",
            to:"https://www.linkedin.com/company/quickstayrooms"
        },
        {
            name:"Twitter",
            alter:"Twitter-icon",
            to:"https://twitter.com/quickstayrooms"
        },
        {
            name:"YouTube",
            alter:"YouTube-icon",
            to:"https://www.youtube.com/channel/UCJHwAKT6eaCMR7ubvYuKxUA"
        },
    ]
    return ( 
        <div className="follow-us">
            <div className="like-share">
                <p>FOLLOW. LIKE. SHARE. </p>
                <div className="social-icons-follow">
                {
                    icons.map((icon,index)=>{
                        const imagename = require(`../../../WebsiteMaterial/Home/Follow/${icon.name}.svg`);
                        return(
                            <a href={icon.to} target="_blank" rel="noopener noreferrer"> <img src={imagename.default} alt={icon.alter} key={index} /></a>
                           
                        )
                    })
                }
                </div>
            </div>
           
           {/* <SocialLogos/> */}
        </div>
     );
}
 
export default Follow;