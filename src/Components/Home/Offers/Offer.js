import './Offer.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

const Offer = () => {

    const [banners,setBanners] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const documentsSnap = await getDocs(collection(db,"banners"));
            documentsSnap.forEach((doc)=>{
                setBanners((prev)=>{
                    return [...prev,doc.data()];
                })
            })
        }
        fetchData();
    },[])

    return ( 
        <div className="offer">
            <div>
                {
                    banners.map(banner =>{
                        return(
                        banner.id === "pGFguINs4xfjnQX1dI19" ? 
                        <Link to="/choose-plan"  key={banner.id}>
                            <div>
                                <img src={banner.url} alt={banner.type}/>
                            </div>
                        </Link> : <Link to="/contact"  key={banner.id}>
                            <div>
                                <img src={banner.url} alt={banner.type}/>
                            </div>
                        </Link>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Offer;