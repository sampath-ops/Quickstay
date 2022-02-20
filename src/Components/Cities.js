import CitiesTemplate from "./CitiesTemplate";

const Cities = (props) => {

    const Locations = [
        {
            name:"Bangalore",
            alter:"Bangalore-icon",
            lat:12.971613,
            lon:77.5946
        },
        {
            name:"Chandigarh",
            alter:"Chandigarh-icon",
            lat:30.7333,
            lon:76.7794
        },
        {
            name:"Chennai",
            alter:"Chennai-icon",
            lat:13.0827,
            lon:80.2707
        },
        {
            name:"Delhi",
            alter:"Delhi-icon",
            lat:28.7041,
            lon:77.1025
        },
        {
            name:"Gurgaon",
            alter:"Gurgaon-icon",
            lat:28.4595,
            lon:77.0266
        },
        {
            name:"Hyderabad",
            alter:"Hyderabad-icon",
            lat:"17.385",
            lon:"78.4867"
        },
        {
            name:"Jaipur",
            alter:"Jaipur-icon",
            lat:26.9124,
            lon:75.7873
        },
        {
            name:"Kolkata",
            alter:"Kolkata-icon",
            lat:22.5726,
            lon:88.3639
        },
        {
            name:"Mumbai",
            alter:"Mumbai-icon",
            lat:19.076,
            lon:72.8777
        },
        {
            name:"Patna",
            alter:"Patna-icon",
            lat:25.5941,
            lon:85.1376
        },
        {
            name:"Pune",
            alter:"Pune-icon",
            lat:18.5204,
            lon:73.8567
        }
    ]

    return ( 
        <div className="locations-images">
            {
                Locations.map((location,index)=>(
                    <CitiesTemplate key={index} location={location} index={index} searchedProperties={props.searchedProperties}/>
                ))
            }
        </div>
     );
}
 
export default Cities;