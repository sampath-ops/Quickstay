const PropertySharing = ({sharing}) => {
    const shares = ["Private","Private","Private","Private"]
    return ( 
        <div className='property-share-container'>
        {
            sharing.map((share,index)=>{
                const image = require(`../../../WebsiteMaterial/PropertyDetailsImages/RoomSharing/${share.name}.svg`);
                return(
                    <div className="property-share-box" key={index}>
                        <img src={image.default} alt={share} />
                        <div className="share-text">
                            <p>{share.name}</p>
                            <p>&#8377; {share.price}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
     );
}
 
export default PropertySharing;