import './FilterMobile.css';
import {useState} from 'react';
import SlideUpFilter from './SlideUpFilter';
import {animated, useTransition} from 'react-spring';

const FilterOptionsForMobile = () => {
    const [isVisible,setIsVisible] = useState(false);
    const transition = useTransition(isVisible,{
        from:{ x:0, y:800, opacity:0 },
        enter:{ x:0, y:0, opacity:1 },
        leave:{ x:0, y:800, opacity:0 },
        delay:200
    });

    const hideFilter = () => {
        document.body.classList.remove('noscroll');
        setIsVisible(false);
      }

    const showFilter = ()=>{
        document.body.classList.add('noscroll');
        setIsVisible(true);
    }

    return ( 
        <div className="filter-mobile">
            <div className="Filters">
                <p onClick={showFilter}>FILTERS</p>
            </div>
            {
                transition((style,item)=>
                        item ? <animated.div style={style} className="slideupfilterContainer"><SlideUpFilter closeFilter={hideFilter}/></animated.div> : ''
                )
            }
        </div>
     );
}
 
export default FilterOptionsForMobile;