import './Template.css';
const Template = (props) => {
    const className = `template ${props.className ? props.className : ''}`; 
    return ( 
        <div className={className}>
            {
                props.images.map(image =>{
                    const imagename = require('../../WebsiteMaterial/'+image.name+'.png');
                    return(
                        <div  key={image.id}>
                            <img src={imagename.default} alt={image.alter}/>
                            {image.text ? <p>{image.text}</p> : null}
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Template;