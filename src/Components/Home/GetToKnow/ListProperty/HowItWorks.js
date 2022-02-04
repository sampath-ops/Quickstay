import "./HowItWorks.css";
const HowItWorks = () => {

    const howItWorks = [
        {
            image:"first",
            texts:["1","Register on","QuickStay."]
        },
        {
            image:"second",
            texts:["2","Fill in all the","property details."]
        },
        {
            image:"third",
            texts:["3","Submit for","QuickVerification."]
        },
        {
            image:"four",
            texts:["4","Start getting","tenants!"]
        },
    ]

    return ( 
        <div className="how-it-works-container">
            {
                howItWorks.map((element,index)=>{
                    const image = require(`../../../../WebsiteMaterial/ListPropertyImages/HowItWorks/${element.image}.png`);
                    return(
                        <div className="how-it-works-steps" style={{backgroundImage:`url(${image.default})`,backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
                             {
                                 element.texts.map(((text,index)=>(
                                     <p key={index}>{text}</p>
                                 )))
                             }
                        </div>
                        //
                    )
                })
            }
        </div>
     );
}
 
export default HowItWorks;