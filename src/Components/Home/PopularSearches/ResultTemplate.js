import { query,collection,where,getDocs } from 'firebase/firestore';
import {db} from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
const ResultTemplate = (props) => {

    const navigate = useNavigate();

    const getDocuments = async()=>{
        const q = query(collection(db,"properties"),where("city","==",props.city));
        const snap = await getDocs(q);
        props.getAllProperties(snap);
        navigate("/filters");
    }

    return ( 
        <div className="pop-container">
            {props.array.map((val,index)=>(
                <span key={index} onClick={getDocuments}>{val}</span>
            ))}
        </div>
    );
}
 
export default ResultTemplate;