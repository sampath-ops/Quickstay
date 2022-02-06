import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider'
import { useState } from 'react';
import { forwardRef,useImperativeHandle } from 'react';
const AllOptions = forwardRef((props,ref) => {

    let filters = {};

    const [checked,setChecked] = useState({
        gender:false,
        type:false,
        status:false,
        sort:false,
        nearest:false
    });

    const nearestHandler = (event)=>{
        setChecked(()=>{
            return {
                [event.target.checked]:true
            }
        })
        props.sortProperties("") // need to undo sort by price on click distance
        props.propertyDistance(true);
    }

    const sortHandler = (event)=>{
        setChecked(() => {
            return {
                [event.target.checked]: true
            };
          });
        props.propertyDistance(false); // need to undo distance on click sort by price
        props.sortProperties(event.target.value)
    }

    const filterHandler = (event)=>{

        setChecked(() => {
            return {
                [event.target.checked]: true
            };
          });

        if(event.target.name === "gender"){
            filters.propertyFor = event.target.value;
        }
        if(event.target.name === "property"){
            filters.propertyType = event.target.value;
        }
        if(event.target.name === "furnish"){
            filters.furnishingStatus = event.target.value;
        }
        handleClick();
    }

    const handleClick = ()=>{
       props.getFilters(filters);
    }

    // clear filters
    useImperativeHandle(ref, () => ({

        clear(){
            setChecked(() => ({ 
               gender:false,
                type:false,
                status:false,
                sort:false,
                nearest:false
            }));
            props.sortProperties("")
        }
    
      }));

    return ( 
        <div className="alloptions">

                <div className="options-container">
                    <p>GENDER</p>
                    <div>
                        <input type="radio" name="gender" id="Male" value="Male"  onChange={filterHandler} checked={checked.gender}/>
                        <label htmlFor="Male">Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="Female" value="Female" onChange={filterHandler} checked={checked.gender}/>
                        <label htmlFor="Female">Female</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="Unisex" value="Unisex"  onChange={filterHandler} checked={checked.gender}/>
                        <label htmlFor="Unisex">Unisex</label>
                    </div>
                </div>

                <div className="options-container">
                    <p>PROPERTY TYPE</p>
                    <div>
                        <input type="radio" name="property" id="Flat" value="Flat" onChange={filterHandler}
                        checked={checked.type}/>
                        <label htmlFor="Flat">Flat</label>
                    </div>
                    <div>
                        <input type="radio" name="property" id="PG" value="PG"  onChange={filterHandler}
                        checked={checked.type}/>
                        <label htmlFor="PG">PG</label>
                    </div>
                    <div>
                        <input type="radio" name="property" id="Independent Rooms" value="Independent Rooms"  onChange={filterHandler} checked={checked.type}/>
                        <label htmlFor="Independent Rooms">Independent Rooms</label>
                    </div>
                </div>

                <div className="options-container">
                    <p>FURNISHING STATUS</p>
                    <div>
                        <input type="radio" name="furnish" id="Fully-Furnished" value="Fully-Furnished" onChange={filterHandler} checked={checked.status}/>
                        <label htmlFor="Fully-Furnished">Fully-Furnished</label>
                    </div>
                    <div>
                        <input type="radio" name="furnish" id="Semi-Furnished" value="Semi-Furnished" onChange={filterHandler} checked={checked.status}/>
                        <label htmlFor="Semi-Furnished">Semi-Furnished</label>
                    </div>
                    <div>
                        <input type="radio" name="furnish" id="Unfurnished" value="Unfurnished" onChange={filterHandler} checked={checked.status}/>
                        <label htmlFor="Unfurnished">Unfurnished</label>
                    </div>
                </div>

                <div className='options-container'>
                    <p>PRICE</p>
                    <MultiRangeSlider
                        min={0}
                        max={30}
                        onChange={({ min, max }) =>{ 
                            // console.log(`min = ${min}, max = ${max}`)
                        }}
                        />
                </div>
            

                <div className="options-container">
                    <p>SORT BY</p>
                    <div>
                        <input type="radio" name="sort" id="Low to High" value="LowToHigh" onChange={sortHandler} checked={checked.sort}/>
                        <label htmlFor="Low to High">Price: Low to High</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="High to Low" value="HighToLow" onChange={sortHandler} checked={checked.sort}/>
                        <label htmlFor="High to Low">Price: High to Low</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="Nearest" value="Nearest" checked={checked.nearest} onChange={nearestHandler}/>
                        <label htmlFor="Nearest">Distance: Nearest</label>
                    </div>
                </div>

            </div>

     );
})
 
export default AllOptions;