import './Find.css';
import Cities from '../../Cities';
const Find = (props) => {

    return ( 
        <div className="Find-us">
             <p>YOU CAN FIND US HERE:</p>
             <Cities searchedProperties={props.searchedProperties}/>
        </div>
     );
}
 
export default Find;