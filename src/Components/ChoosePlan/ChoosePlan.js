import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
import HowItWorks from "./HowItWorks";
import './ChoosePlan.css';
import ChooseAmount from "./ChooseAmount/ChooseAmount";
import PlanDetails from "./PlanDetails/PlanDetails";
const ChoosePlan = (props) => {
    return (
        <MainSub searchedProperties={props.searchedProperties}>
             <div>
                <div className="choose-plan">
                    <h3>FIND A <span>RENTAL STAY</span> BY SAVING <span>THOUSANDS</span> ON BROKERAGE!</h3>
                    <PlanDetails/>
                    <ChooseAmount/>
                    <HowItWorks/>
                </div>
                <Locations/>
             </div>
        </MainSub>
      );
}
 
export default ChoosePlan;