import FilterNavBar from "./FilterNavBar";
const MainSub = (props) => {
   
    return ( 
        <div>
            <FilterNavBar searchedProperties={props.searchedProperties}/>
            {props.children}
        </div>
     );
}
 
export default MainSub;