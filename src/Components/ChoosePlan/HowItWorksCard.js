import './HowItWorksCard.css';
const HowItWorksCard = (props) => {
    return ( 
        <div className="how-it-works-card" style={{borderColor:props.color}}>
            <div className="dotted" style={{borderColor:props.color}}>
                <div className="dotted-inner" style={{background:props.color}}>
                   {props.number}
                </div>
            </div>
            <p>{props.txt1}<br />{props.txt2}</p>
        </div>
     );
}
 
export default HowItWorksCard;