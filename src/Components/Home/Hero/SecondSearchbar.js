import {Link} from "react-router-dom";
const SecondSearchbar = () => {
    return ( 
        <div className="second-searchbar" >
            <div>
                {/* <input type="text"  placeholder="Do you own a residential property? List it here..."/> */}
                <Link to="/list-property"><button>Do you own a residential property? List it here</button></Link>
                <Link to="/list-property"><button>List Your Property</button></Link>
                <div className="circle">
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
     );
}
 
export default SecondSearchbar;