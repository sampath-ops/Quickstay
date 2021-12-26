const DetailsTemplate = (props) => {
    return ( 
        <div className="DetailsTemplatecontainer">
            <p>{props.head}</p>
            <div className="DetailsTemplate">
                {
                    props.elements.map((element,index)=>{
                    const image = require(`../../WebsiteMaterial/PropertyDetailsImages/${element.path}.png`)
                        return(
                            <div key={index}>
                                <img src={image.default} alt={element.name} />
                                <p>{element.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default DetailsTemplate;