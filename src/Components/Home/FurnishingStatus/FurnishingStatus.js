import Template from "../BoxTemplate";
import Description from "../Description";
const FurnishingStatus = () => {
    const heading = ["Find homes by","Furnishing"]
    const description = "Your room, your way! Choose among unfurnished, semi-furnished or fully-furnished rental room accommodation options. Because your chair shouldn't multitask as a clothes rack or your bed is not your part-time study table!";

    const furnishingStatus = [
        {
            id:0,
            name:'FurnishingStatus/furnished',
            alter:'Furnished',
            text:'Furnished'
        },
        {
            id:1,
            name:'FurnishingStatus/semi-furnished',
            alter:'Semi-Furnished',
            text:'Semi-Furnished'
        },
        {
            id:2,
            name:'FurnishingStatus/unfurnished',
            alter:'Unfurnished',
            text:'Unfurnished'
        },
    ]

    return (  
        <div className="furnishing_status custom_box-template">
             <Description head={heading} para={description}/>
            <Template images={furnishingStatus} className="custom-card-template" />
        </div>
    );
}
 
export default FurnishingStatus;