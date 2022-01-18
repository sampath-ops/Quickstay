import './FilterMobile.css';
import {useState,useEffect} from 'react';
import SlideUpFilter from './SlideUpFilter';
import {animated, useTransition} from 'react-spring';

const FilterOptionsForMobile = (props) => {
    const [isVisible,setIsVisible] = useState(false);
    const transition = useTransition(isVisible,{
        from:{ x:0, y:800, opacity:0 },
        enter:{ x:0, y:0, opacity:1 },
        leave:{ x:0, y:800, opacity:0 }
    });

    const hideFilter = () => {
        document.body.classList.remove('noscroll');
        setIsVisible(false);
      }

    const showFilter = ()=>{
        document.body.classList.add('noscroll');
        setIsVisible(true);
    }

    const [float, setFloat] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setFloat(window.scrollY > 110);
        }
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    });

    const selectedFilters = Object.keys(props.filters)
    .map(function(key) {
        return props.filters[key];
    });
   
    if(props.sort && !props.showDistance){
        selectedFilters.push(props.sort);
    }
    if(props.showDistance){
        selectedFilters.push("Nearest")
    }

    return ( 
        <div className="filter-mobile">
            <div className={`Filters ${float ? "float-filter-top": ""}`}>
                <div className="selectedFilters">
                    {selectedFilters.map((selectedFilter,index)=>(
                        <div key={index}>{selectedFilter}</div>
                    ))}
                </div>
                <p onClick={showFilter}>FILTERS</p>
            </div>
            
            {setIsVisible ? transition((style,item)=>
                    item ? <animated.div style={style} className="slideupfilterContainer"><SlideUpFilter closeFilter={hideFilter} getFilters={props.getFilters} sortProperties={props.sortProperties} clearFilters={props.clearFilters} propertyDistance={props.propertyDistance} filters={props.filters} sort={props.sort} showDistance={props.showDistance}/></animated.div> : ''
            ) : "" }
            
        </div>
     );
}
 
export default FilterOptionsForMobile;