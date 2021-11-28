import Template from "../BoxTemplate";
import './ReferEarn.css';
const ReferEarn = () => {
    const refer = [
        {
            id:0,
            name:'Refer&Earn1',
            alter:'Refer&Earn1'
        },
        {
            id:1,
            name:'Refer&Earn2',
            alter:'Refer&Earn2'
        }
    ]
    return ( 
        <div className="refer">
            <Template  images={refer} className="referbox"/>
        </div>
     );
}
 
export default ReferEarn;