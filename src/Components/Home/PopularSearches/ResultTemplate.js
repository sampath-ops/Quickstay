import { query,collection,where,getDocs } from 'firebase/firestore';
import {db} from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
const ResultTemplate = (props) => {

    const navigate = useNavigate();

    const getDocuments = async(val)=>{

        const q = query(collection(db,"properties"),where("city","==",props.city),where("activeStatus","==",true),where("approved","==",true));

        const snap = await getDocs(q);

        props.getAllProperties(snap);

        const result = val.split(" ");
        
        result.forEach((element,index) => {
            result[index] = element.toLowerCase();
        });

        const urltag = result.join("-")
        
        navigate(`/cities/${urltag}`);
    }

    return ( 
        <div className="pop-container">
            {props.array.map((val,index)=>(
                <span key={index} onClick={()=>getDocuments(val)}>{val}</span>
            ))}
        </div>
    );
}
 
export default ResultTemplate;