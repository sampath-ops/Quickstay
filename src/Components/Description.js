const Description = (props) => {
    return ( 
        <div className="description">
            <h2>{props.head[0]} <br /> {props.head[1]}</h2>
            <p>{props.para}</p>
        </div>
     );
}
 
export default Description;