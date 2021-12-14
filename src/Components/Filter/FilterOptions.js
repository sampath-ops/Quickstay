import PriceRange from "./PriceRange";
const FilterOptions = () => {
    return ( 
        <div className="filter-options">

            <p>Filters</p>

            <div className="options-container">
                <p>GENDER</p>
                <div>
                    <input type="radio" name="gender" id="Male" value="Male" />
                    <label htmlFor="Male">Male</label>
                </div>
                <div>
                    <input type="radio" name="gender" id="Female" value="Female" />
                    <label htmlFor="Female">Female</label>
                </div>
                <div>
                    <input type="radio" name="gender" id="Unisex" value="Unisex" />
                    <label htmlFor="Unisex">Unisex</label>
                </div>
            </div>

            <div className="options-container">
                <p>PROPERTY TYPE</p>
                <div>
                    <input type="radio" name="property" id="Flat" value="Flat" />
                    <label htmlFor="Flat">Flat</label>
                </div>
                <div>
                    <input type="radio" name="property" id="PG" value="PG" />
                    <label htmlFor="PG">PG</label>
                </div>
                <div>
                    <input type="radio" name="property" id="Independent Rooms" value="Independent Rooms" />
                    <label htmlFor="Independent Rooms">Independent Rooms</label>
                </div>
            </div>

            <div className="options-container">
                <p>FURNISHING STATUS</p>
                <div>
                    <input type="radio" name="furnish" id="Fully-Furnished" value="Fully-Furnished" />
                    <label htmlFor="Fully-Furnished">Fully-Furnished</label>
                </div>
                <div>
                    <input type="radio" name="furnish" id="Semi-Furnished" value="Semi-Furnished" />
                    <label htmlFor="Semi-Furnished">Semi-Furnished</label>
                </div>
                <div>
                    <input type="radio" name="furnish" id="Unfurnished" value="Unfurnished" />
                    <label htmlFor="Unfurnished">Unfurnished</label>
                </div>
            </div>

            <PriceRange></PriceRange>

            <div className="options-container">
                <p>SORT BY</p>
                <div>
                    <input type="radio" name="sort" id="Low to High" value="Low to High" />
                    <label htmlFor="Low to High">Price: Low to High</label>
                </div>
                <div>
                    <input type="radio" name="sort" id="High to Low" value="High to Low" />
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
 
export default FilterOptions;