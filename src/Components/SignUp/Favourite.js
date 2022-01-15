import { useState } from "react";
import './KnowLittle.css'; 
const Favourite = ({img,index,getFav}) => {

    const imagename = require(`../../WebsiteMaterial/SignUpImages/${img.name}.png`);

    const [color, setColors] = useState("");
    const [active, setActive] = useState(false);

    const handleClick = (c,fav) => {
        getFav(fav);
        setActive(true);
        setColors(c);
        if (active === true) {
        setActive(false);
        setColors("");
        }
    };

    return(
        <div key={index} className={`${color}`} onClick={()=>{
            handleClick("selected",img.text);
        }}>
            <div className='habits'>
                <img src={imagename.default} alt={img} />
                <span>{img.text}</span>
            </div>
        </div>
    )

}
 
export default Favourite;