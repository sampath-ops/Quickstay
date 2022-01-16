import AllOptions from './AllOptions';
const FilterOptions = (props) => {
    return ( 
        <div className="filter-options">

            <div className='Filters'>
                 <p>FILTERS</p>
            </div>
            <AllOptions getFilters={props.getFilters} sortProperties={props.sortProperties}/>
            
        </div>
     );
}
 
export default FilterOptions;