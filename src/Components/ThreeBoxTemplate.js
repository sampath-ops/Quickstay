import './Template.css';
const Template = (props) => {
    return ( 
        <div className="template">
            {
                props.images.map(image =>{
                    const imagename = require('../WebsiteMaterial/'+image.name+'.png');
                    return(
                        <div  key={image.id}>
                            <img src={imagename.default} alt={image.alter}/>
                            <p>{image.text}</p>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Template;