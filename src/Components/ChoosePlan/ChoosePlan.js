import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import HowItWorks from "./HowItWorks";
import './ChoosePlan.css';
import ChooseAmount from "./ChooseAmount/ChooseAmount";
import PlanDetails from "./PlanDetails/PlanDetails";
const ChoosePlan = (props) => {
    return (
        <MainSub searchedProperties={props.searchedProperties} user={props.user}>
             <div>
                <div className="choose-plan">
                    <h3>FIND A <span>RENTAL STAY</span> BY SAVING <span>THOUSANDS</span> ON BROKERAGE!</h3>
                    <PlanDetails/>
                    <ChooseAmount/>
                    <HowItWorks/>
                </div>
                <Locations getAllProperties={props.allProperties}/>
             </div>
        </MainSub>
      );
}
 
export default ChoosePlan;