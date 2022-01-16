import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider'
const AllOptions = (props) => {

    let filters = {};

    const sortHandler = (event)=>{
        props.sortProperties(event.target.value)
    }

    const genderHandler = (event)=>{
        filters.propertyFor = event.target.value;
        handleClick()
    }

    const typeHandler = (event)=>{
        filters.propertyType = event.target.value;
        handleClick()
    }

    const furnishHandler = (event)=>{
       filters.furnishingStatus = event.target.value;
       handleClick()
    }

    const handleClick = ()=>{
       props.getFilters(filters);
    }


    return ( 
        <div className="alloptions">

                <div className="options-container">
                    <p>GENDER</p>
                    <div>
                        <input type="radio" name="gender" id="Male" value="Male" onChange={genderHandler} />
                        <label htmlFor="Male">Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="Female" value="Female" onChange={genderHandler}/>
                        <label htmlFor="Female">Female</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="Unisex" value="Unisex"  onChange={genderHandler}/>
                        <label htmlFor="Unisex">Unisex</label>
                    </div>
                </div>

                <div className="options-container">
                    <p>PROPERTY TYPE</p>
                    <div>
                        <input type="radio" name="property" id="Flat" value="Flat" onChange={typeHandler}/>
                        <label htmlFor="Flat">Flat</label>
                    </div>
                    <div>
                        <input type="radio" name="property" id="PG" value="PG"  onChange={typeHandler}/>
                        <label htmlFor="PG">PG</label>
                    </div>
                    <div>
                        <input type="radio" name="property" id="Independent Rooms" value="Independent Rooms"  onChange={typeHandler}/>
                        <label htmlFor="Independent Rooms">Independent Rooms</label>
                    </div>
                </div>

                <div className="options-container">
                    <p>FURNISHING STATUS</p>
                    <div>
                        <input type="radio" name="furnish" id="Fully-Furnished" value="Fully-Furnished" onChange={furnishHandler}/>
                        <label htmlFor="Fully-Furnished">Fully-Furnished</label>
                    </div>
                    <div>
                        <input type="radio" name="furnish" id="Semi-Furnished" value="Semi-Furnished" onChange={furnishHandler}/>
                        <label htmlFor="Semi-Furnished">Semi-Furnished</label>
                    </div>
                    <div>
                        <input type="radio" name="furnish" id="Unfurnished" value="Unfurnished" onChange={furnishHandler}/>
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
                        <input type="radio" name="sort" id="Low to High" value="LTH" onChange={sortHandler}/>
                        <label htmlFor="Low to High">Price: Low to High</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="High to Low" value="HTL" onChange={sortHandler}/>
                        <label htmlFor="High to Low">Price: High to Low</label>
                    </div>
                    <div>
                        <input type="radio" name="sort" id="Nearest" value="Nearest" />
                        <label htmlFor="Nearest">Distance: Nearest</label>
                    </div>
                </div>

            </div>

     );
}
 
export default AllOptions;