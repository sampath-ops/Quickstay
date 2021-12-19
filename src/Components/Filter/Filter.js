import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import CardContainer from "../Home/ExclusiveProperty/CardContainer";
import './Filter.css';
import FilterOptions from "./FilterOptions";
import FilterOptionsForMobile from "./FilterOptionForMobile/FilterOptionsForMobile";
const Filter = () => {
    const properties = [
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'Private Room',
            amount:6500,
            location:"Sec 22, Chandigarh",
            type:"Fully-Furnished",
            person:"Male",
            alter:"male"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'PG',
            amount:5000,
            location:"Sec 46, Chandigarh",
            type:"Fully-Furnished",
            person:"Female",
            alter:"female"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'Single Room',
            amount:8500,
            location:"VIP road, Chandigarh",
            type:"Fully-Furnished",
            person:"Unisex",
            alter:"unisex"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'1RK',
            amount:"10,500",
            location:"VIP road, Zirakpur",
            type:"Fully-Furnished",
            person:"Female",
            alter:"Female"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'Private Room',
            amount:6500,
            location:"Sec 22, Chandigarh",
            type:"Fully-Furnished",
            person:"Male",
            alter:"male"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'PG',
            amount:5000,
            location:"Sec 46, Chandigarh",
            type:"Fully-Furnished",
            person:"Female",
            alter:"female"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'Single Room',
            amount:8500,
            location:"VIP road, Chandigarh",
            type:"Fully-Furnished",
            person:"Unisex",
            alter:"unisex"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'1RK',
            amount:"10,500",
            location:"VIP road, Zirakpur",
            type:"Fully-Furnished",
            person:"Female",
            alter:"Female"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'Private Room',
            amount:6500,
            location:"Sec 22, Chandigarh",
            type:"Fully-Furnished",
            person:"Male",
            alter:"male"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'PG',
            amount:5000,
            location:"Sec 46, Chandigarh",
            type:"Fully-Furnished",
            person:"Female",
            alter:"female"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'Single Room',
            amount:8500,
            location:"VIP road, Chandigarh",
            type:"Fully-Furnished",
            person:"Unisex",
            alter:"unisex"
        },
        {
            images:["living-room.jpg","living-room.jpg","living-room.jpg"],
            name:'1RK',
            amount:"10,500",
            location:"VIP road, Zirakpur",
            type:"Fully-Furnished",
            person:"Female",
            alter:"Female"
        },
    ]

  

    return ( 
        <MainSub>
            <div>
                <div className="filters-section-container">
                    <div className="filter-section">
                        <FilterOptions/>
                        <FilterOptionsForMobile/>
                    </div>
                    <div className="filter-results">
                        <CardContainer properties={properties} className="filter-cards" details="filter-results-properties" carousel="true"></CardContainer>
                    </div>
                </div>
               <Locations/>
            </div>
        </MainSub>
     );
}
 
export default Filter;