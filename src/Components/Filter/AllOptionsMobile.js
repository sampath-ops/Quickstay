/* eslint-disable */
import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider'
import { useEffect, useState } from 'react';
import { forwardRef,useImperativeHandle } from 'react';
const AllOptionsMobile = forwardRef((props,ref) => {

    let filters = {};

    const [genderCheck,setGenderCheck] = useState({
        Male:false,
        Female:false,
        Unisex:false, 
    });

    const [typeCheck,setTypeCheck] = useState({
        Flat:false,
        PG:false,
        IndependentRooms:false,
    })

    const [statusCheck,setStatusCheck] = useState({
        FullyFurnished:false,
        SemiFurnished:false,
        Unfurnished:false
    })

    const [sortCheck,setSortCheck] = useState({
        LowToHigh:false,
        HighToLow:false
    })

    const [nearCheck,setNearCheck] = useState({
        Nearest:false
    })
   
 
    const genderHandler = (event)=>{
        setGenderCheck(()=>{
            return {
                Male:false,
                Female:false,
                Unisex:false,
                [event.target.value]: true
            }
        })
        filters.propertyFor = event.target.value;
        props.getFilters(filters);
    }

    const typeHandler = (event)=>{ 
        setTypeCheck(()=>{
            return{
                Flat:false,
                PG:false,
                IndependentRooms:false,
                [event.target.value]: true
            }
        })
        filters.propertyType = event.target.value;
        props.getFilters(filters);
    }

    const statusHandler = (event)=>{
        setStatusCheck(()=>{
            return{
                FullyFurnished:false,
                SemiFurnished:false,
                Unfurnished:false,
                [event.target.value]: true
            }
        })
        filters.furnishingStatus = event.target.value;
        props.getFilters(filters);
    }

    const sortHandler = (event)=>{
        setSortCheck(()=>{
            return{
                LowToHigh:false,
                HighToLow:false,
                [event.target.value]: true   
            }
        })
        setNearCheck(()=>{
            return{
                Nearest:false
            }
        })
        props.sortProperties(event.target.value);
    }

    const nearestHandler = ()=>{
        setNearCheck(()=>{
            return{
                Nearest:true
            }
        })
        setSortCheck(()=>{
            return{
                LowToHigh:false,
                HighToLow:false, 
            }
        })
       props.propertyDistance(true);
    }

    // clear filters
    useImperativeHandle(ref, () => ({

        clear(){
            setGenderCheck(() => ({ 
                Male:false,
                Female:false,
                Unisex:false,
            }));
            setTypeCheck(()=>({
                Flat:false,
                PG:false,
                IndependentRooms:false,
            }))
            setStatusCheck(()=>({
                FullyFurnished:false,
                SemiFurnished:false,
                Unfurnished:false
            }))
            setSortCheck(()=>({
                LowToHigh:false,
                HighToLow:false,
                nearest:false
            }))
            setNearCheck(()=>({
                Nearest:false
            }))
          
        }
    
      }));

        useEffect(()=>{
            setGenderCheck(()=>{
                return {
                    Male:false,
                    Female:false,
                    Unisex:false,
                    [props.filters.propertyFor]: true
                }
            })
            setTypeCheck(()=>{
                return{
                    Flat:false,
                    PG:false,
                    IndependentRooms:false,
                    [props.filters.propertyType]: true
                }
            })
            setStatusCheck(()=>{
                return{
                    FullyFurnished:false,
                    SemiFurnished:false,
                    Unfurnished:false,
                    [props.filters.furnishingStatus]: true
                }
            })
            setSortCheck(()=>{
                return{
                    LowToHigh:false,
                    HighToLow:false,
                    [props.sort]: true   
                }
            })
            if(props.showDistance){
                setNearCheck(()=>{
                    return {
                        Nearest:true
                    }
                })
            }
        },[])

    return ( 
        <div className="alloptions">

                <div className="options-container">
                    <p>GENDER</p>
                    <div>
                        <input type="radio" name="gender" id="M" value="Male"  onChange={genderHandler} checked={genderCheck.Male}/>
                        <label htmlFor="M">Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="Fe" value="Female" onChange={genderHandler} checked={genderCheck.Female}/>
                        <label htmlFor="Fe">Female</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="U" value="Unisex"  onChange={genderHandler} checked={genderCheck.Unisex}/>
                        <label htmlFor="U">Unisex</label>
                    </div>
                </div>

                <div className="options-container">
                    <p>PROPERTY TYPE</p>
                    <div>
                        <input type="radio" name="property" id="F" value="Flat" onChange={typeHandler}
                        checked={typeCheck.Flat}/>
                        <label htmlFor="F">Flat</label>
                    </div>
                    <div>
                        <input type="radio" name="property" id="pg" value="PG"  onChange={typeHandler}
                        checked={typeCheck.PG}/>
                        <label htmlFor="pg">PG</label>
                    </div>
                    <div>
                        <input type="radio" name="property" id="IR" value="IndependentRooms"  onChange={typeHandler} checked={typeCheck.IndependentRooms}/>
                        <label htmlFor="IR">Independent Rooms</label>
                    </div>
                </div>

                <div className="options-container">
                    <p>FURNISHING STATUS</p>
                    <div>
                        <input type="radio" name="furnish" id="FF" value="FullyFurnished" onChange={statusHandler} checked={statusCheck.FullyFurnished}/>
                        <label htmlFor="FF">Fully-Furnished</label>
                    </div>
                    <div>
                        <input type="radio" name="furnish" id="SF" value="SemiFurnished" onChange={statusHandler} checked={statusCheck.SemiFurnished}/>
                        <label htmlFor="SF">Semi-Furnished</label>
                    </div>
                    <div>
                        <input type="radio" name="furnish" id="UF" value="Unfurnished" onChange={statusHandler} checked={statusCheck.Unfurnished}/>
                        <label htmlFor="UF">Unfurnished</label>
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
                        <input type="radio" name="sort" id="LTH" value="LowToHigh" onChange={sortHandler} checked={sortCheck.LowToHigh}/>
                        <label htmlFor="LTH">Price: Low to High</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="HTL" value="HighToLow" onChange={sortHandler} checked={sortCheck.HighToLow}/>
                        <label htmlFor="HTL">Price: High to Low</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="near" value="Nearest" onChange={nearestHandler}
                        checked={nearCheck.Nearest}/>
                        <label htmlFor="near">Distance: Nearest</label>
                    </div>
                </div>

            </div>

     );
})
 
export default AllOptionsMobile;