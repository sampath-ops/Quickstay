import "./WhyList.css";
const WhyList = () => {

    const whyList = [
        {
            image:"List property",
            texts:["List your property","FOR FREE.","Earn Monthly!"]
        },
        {
            image:"Reach audience",
            texts:["Reach to","wider Audience."]
        },
        {
            image:"Reach tenants",
            texts:["Tenants can","contact you directly."]
        },
        {
            image:"Customer care",
            texts:["Customer care","support."]
        },
    ]

    return (  
        <div className="whyList">
                {
                    whyList.map((element,index)=>{
                        const image = require(`../../../../WebsiteMaterial/ListPropertyImages/Why List on QuickStay/${element.image}.svg`);
                        return(
                            <div className="whyList_reasons" key={index}>
                                <img src={image.default} alt={element.image} />
                                {
                                    element.texts.map((text,index)=>(
                                        <p key={index}>{text}</p>
                                    ))
                                }
                            </div>
                        )
                    })
                }
        </div>
    );
}
 
export default WhyList;