const SocialLogos = () => {
    const colors = ["#FFDE17","#8DFE8B","#A2DBDF","#5C76FF","#FF1717"];
    return ( 
        <div className="social-logos">
            {
                colors.map((color,index)=>(
                    <div style={{background:color}} key={index}></div>
                ))
            }
        </div>
     );
}
 
export default SocialLogos;