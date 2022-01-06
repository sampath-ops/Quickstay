import './Hero.css';
const SearchBar = () => {
    return ( 
        <div className="searchbar">
            
            <input type="text" placeholder="Search Locality..." />
            <button className="search_icon"><i className="fas fa-search"></i></button>
            <button className='search_text'>SEARCH</button>
        </div>
     );
}
 
export default SearchBar;