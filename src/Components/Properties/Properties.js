import MainSub from "../NavBar/MainSub";
import Cities from "../Cities";
// import CardContainer from "../Home/ExclusiveProperty/CardContainer";
const Properties = (props) => {
    
    return ( 
        <MainSub>
            <div className="properties">
                <Cities/>
                {/* <CardContainer properties={props.resultProperties} className="filter-cards" details="filter-results-properties" carousel="true"></CardContainer> */}
            </div>
        </MainSub>
     );
}
 
export default Properties;