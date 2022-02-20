const ResultTemplate = (props) => {

    return ( 
        <div className="pop-container">
            {props.array.map((val,index)=>{
                const result = val.split(" ");
                        
                result.forEach((element,index) => {
                    result[index] = element.toLowerCase();
                });

                const urltag = result.join("-");
                return(
                    <a key={index} href={`/cities/${urltag}`}>{val}</a>
                )
            }
            )}
        </div>
    );
}
 
export default ResultTemplate;