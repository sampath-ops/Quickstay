import './Offer.css';
const Offer = () => {
    const images = [
        {
            id:0,
            name:'2',
            alter:'quick verified'
        },
        {
            id:1,
            name:'5',
            alter:'diwali offer'
        },
        {
            id:2,
            name:'3',
            alter:'tension free'
        },
    ]
    return ( 
        <div className="offer">
            {
                images.map(image =>{
                    const imagename = require('../../WebsiteMaterial/'+ image.name + '.png');
                    return(
                       <div  key={image.id}>
                            <img src={imagename.default} alt={image.alter}/>
                       </div>
                    )
                })
            }
        </div>
     );
}
 
export default Offer;