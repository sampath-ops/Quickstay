import MainSub from "../NavBar/MainSub";
import Cities from "../Cities";
import CardContainer from "../Home/ExclusiveProperty/CardContainer";
import './Properties.css';
const Properties = (props) => {

    // const extract = (obj, ...keys) => {
    //     const newObject = Object.assign({});
    //     Object.keys(obj).forEach((key) => {
    //     if(keys.includes(key)){
    //         newObject[key] = obj[key];
    //         delete obj[key];
    //     };
    //     });
    //     return newObject;
    //     };

    const propertyarr = [];
    props.snap.forEach(item =>{
        if('images' in item.data()){
            const images = item.data().images;
            if(images.length > 0){
                propertyarr.push(item.data());
            } 
        }       
    })

    return ( 
        <MainSub>
            <div className="properties">
                <Cities/>
                {propertyarr && <CardContainer properties={propertyarr} className="filter-cards" details="filter-results-properties" carousel="true" addPropDetailsHandler={props.addPropDetailsHandler}></CardContainer>}
            </div>
        </MainSub>
     );
}
 
export default Properties;