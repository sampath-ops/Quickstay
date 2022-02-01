import CountUp from 'react-countup';
import "./Counter.css";
const Counter = ({text,count,id}) => {
    return ( 
        <div className="achievement">
            <CountUp start={0} end={count} delay={0} duration={2}>
                {({ countUpRef }) => (
                    <div className="achievement-counter">
                        <p ref={countUpRef} />
                        {id === 2 ?<p>+ Lakhs</p> :  <p>+</p> }
                    </div>
                )}
            </CountUp>
            <p>{text}</p>
        </div>
     );
}
 
export default Counter;