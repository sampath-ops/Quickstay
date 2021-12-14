import FilterNavBar from "./FilterNavBar";

const MainSub = (props) => {
    return ( 
        <div>
            <FilterNavBar/>
            {props.children}
        </div>
     );
}
 
export default MainSub;