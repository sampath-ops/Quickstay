const SearchBar = () => {
    return ( 
        <div className="searchbar">
            <select>
                <option>Chandigarh</option>
                <option>Salem</option>
                <option>Chennai</option>
            </select>
            <input type="text" placeholder="Search Locality..." />
            <button>SEARCH</button>
        </div>
     );
}
 
export default SearchBar;