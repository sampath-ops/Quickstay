import AllOptions from './AllOptions';
import { useRef } from 'react';
const FilterOptions = (props) => {
    const childref = useRef();
    const submitFilter = true;
    return ( 
        <div className="filter-options">

            <div className='Filters'>
                 <p>FILTERS</p>
                 <button onClick={()=>{
                     props.clearFilters({});
                     childref.current.clear();
                     props.propertyDistance(false)
                 }}>Clear</button>
            </div>
            <AllOptions getFilters={props.getFilters} sortProperties={props.sortProperties} propertyDistance={props.propertyDistance} ref={childref} submitFilter={submitFilter}/>
            
        </div>
     );
}
 
export default FilterOptions;