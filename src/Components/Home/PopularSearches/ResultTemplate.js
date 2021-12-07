const ResultTemplate = (props) => {
    return ( 
        <div className="pop-container">
            {props.array.map((val,index)=>(
                <p key={index}>{val}</p>
            ))}
        </div>
    );
}
 
export default ResultTemplate;