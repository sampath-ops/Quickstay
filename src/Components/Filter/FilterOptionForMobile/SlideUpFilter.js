import './FilterMobile.css';
import { useRef, useState } from 'react';
import AllOptionsMobile from '../AllOptionsMobile';
const SideUpFilter = (props) => {

    const childref = useRef();
    const [selected,setSelected] = useState();
    const [selectedSort,setSelectedSort] = useState();
    const [nearest,setNearest] = useState();

    const getSlideFilters = (filters)=>{
        setSelected({...selected,...filters})
    }

    const getSlideSort = (sorting)=>{
        setSelectedSort(sorting);
        setNearest(false);
    }

    const getNearest = (bool)=>{
        setNearest(bool)
    }

    const applyFilters = ()=>{
        props.getFilters(selected)
        props.sortProperties(selectedSort);
        props.propertyDistance(nearest)
        // setSelected({});
        props.closeFilter();
    }
    
    return ( 
        <div className="slideupfilter">
            <div className="filter-nav">
                <div>
                    <i className="fas fa-arrow-left" onClick={props.closeFilter}></i>
                    <p>Filters</p>
                </div>
               <button onClick={()=>{
                     props.clearFilters({});
                     childref.current.clear();
                     props.propertyDistance(false)
                    //  setSelected({});
                 }}>clear All</button>
            </div>
            <div className="mobile-filter-options">
                <AllOptionsMobile getFilters={getSlideFilters} sortProperties={getSlideSort} propertyDistance={getNearest} ref={childref} filters={props.filters} sort={props.sort} showDistance={props.showDistance}/>
            </div>
            <div className="apply-cancle">
                <button onClick={props.closeFilter}>Cancle</button>
                <button onClick={applyFilters}>Apply</button>
            </div>
        </div>
     );
}
 
export default SideUpFilter;