import "./HowItWorks.css";
const HowItWorks = () => {

    const howItWorks = [
        {
            image:"1",
            texts:["1","Register on","QuickStay."]
        },
        {
            image:"2",
            texts:["2","Fill in all the","property details."]
        },
        {
            image:"3",
            texts:["3","Submit for","QuickVerification."]
        },
        {
            image:"4",
            texts:["4","Start getting","tenants!"]
        },
    ]

    return ( 
        <div className="how-it-works-container">
            {
                howItWorks.map((element,index)=>{
                    const image = require(`../../../../WebsiteMaterial/ListPropertyImages/HowItWorks/${element.image}.svg`);
                    return(
                        <div className="how-it-works-steps" style={{backgroundImage:`url(${image.default})`,backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}} key={index}>
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