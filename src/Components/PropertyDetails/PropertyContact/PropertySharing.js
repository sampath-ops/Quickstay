const PropertySharing = () => {
    const shares = ["Private","Private","Private","Private"]
    return ( 
        <div className='property-share-container'>
        {
            shares.map((share,index)=>{
                const image = require('../../../WebsiteMaterial/PropertyDetailsImages/PropertyContact/Private.png');
                return(
                    <div className="property-share-box" key={index}>
                        <img src={image.default} alt={share} />
                        <div className="share-text">
                            <p>Single Room</p>
                            <p>&#8377; 8000</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
     );
}
 
export default PropertySharing;