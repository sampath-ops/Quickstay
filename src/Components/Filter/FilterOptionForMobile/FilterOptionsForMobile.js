import './FilterMobile.css';
import {useState,useEffect} from 'react';
import SlideUpFilter from './SlideUpFilter';
import {animated, useTransition} from 'react-spring';

const FilterOptionsForMobile = () => {
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
            setFloat(window.scrollY > 54);
        }
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    });

    return ( 
        <div className="filter-mobile">
            <div className={`Filters ${float ? "float-filter-top": ""}`}>
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