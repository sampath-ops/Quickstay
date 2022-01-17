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
        LTH:false,
        HTL:false
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
        handleClick();
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
        handleClick();
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
        handleClick();
    }

    const sortHandler = (event)=>{
        setSortCheck(()=>{
            return{
                LTH:false,
                HTL:false,
                [event.target.value]: true   
            }
        })
        props.sortProperties(event.target.value)
    }


    const handleClick = ()=>{
       props.getFilters(filters);
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
                LTH:false,
                HTL:false,
            }))
            props.sortProperties("")
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
                    LTH:false,
                    HTL:false,
                    [props.sort]: true   
                }
            })
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
                        <input type="radio" name="sort" id="LTH" value="LTH" onChange={sortHandler} checked={sortCheck.LTH}/>
                        <label htmlFor="LTH">Price: Low to High</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="HTL" value="HTL" onChange={sortHandler} checked={sortCheck.HTL}/>
                        <label htmlFor="HTL">Price: High to Low</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="near" value="Nearest" />
                        <label htmlFor="near">Distance: Nearest</label>
                    </div>
                </div>

            </div>

     );
})
 
export default AllOptionsMobile;