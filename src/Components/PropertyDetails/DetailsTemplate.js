const DetailsTemplate = (props) => {

    return ( 
        <div className="DetailsTemplatecontainer">
            <p>{props.head}</p>
            <div className="DetailsTemplate">
                {
                    props.facilitiesAndNeigh.map((element,index)=>{
                    const image = require(`../../WebsiteMaterial/PropertyDetailsImages/FacilitiesAndNeighBourhood/${element}.svg`)
                        return(
                            <div key={index}>
                                <img src={image.default} alt={element} />
                                <p>{element}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default DetailsTemplate;