const Cities = () => {

    const Locations = [
        {
            name:"Bangalore",
            alter:"Bangalore-icon"
        },
        {
            name:"Chandigarh",
            alter:"Chandigarh-icon"
        },
        {
            name:"Chennai",
            alter:"Chennai-icon"
        },
        {
            name:"Delhi",
            alter:"Delhi-icon"
        },
        {
            name:"Gurgaon",
            alter:"Gurgaon-icon"
        },
        {
            name:"Hyderabad",
            alter:"Hyderabad-icon"
        },
        {
            name:"Gurgaon",
            alter:"Gurgaon-icon"
        },
        {
            name:"Chandigarh",
            alter:"Chandigarh-icon"
        },
        {
            name:"Bangalore",
            alter:"Bangalore-icon"
        },
        {
            name:"Chandigarh",
            alter:"Chandigarh-icon"
        },
        {
            name:"Chennai",
            alter:"Chennai-icon"
        },
        {
            name:"Delhi",
            alter:"Delhi-icon"
        },
    ]

    return ( 
        <div className="locations-images">
            {
                Locations.map((location,index)=>{
                    const img = require(`../WebsiteMaterial/${location.name}.png`);
                    return(
                        <div key={index} className="places">
                            <img src={img.default} alt={location.alter} />
                            <p>{location.name}</p>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Cities;