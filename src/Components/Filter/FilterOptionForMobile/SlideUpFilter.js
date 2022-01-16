import AllOptions from '../AllOptions';
import './FilterMobile.css';
const SideUpFilter = (props) => {
    return ( 
        <div className="slideupfilter">
            <div className="filter-nav">
                <div>
                    <i className="fas fa-arrow-left" onClick={props.closeFilter}></i>
                    <p>Filters</p>
                </div>
               <button>clear All</button>
            </div>
            <div className="mobile-filter-options">
                <AllOptions getFilters={props.getFilters}/>
            </div>
            <div className="apply-cancle">
                <button>Cancle</button>
                <button>Apply</button>
            </div>
        </div>
     );
}
 
export default SideUpFilter;