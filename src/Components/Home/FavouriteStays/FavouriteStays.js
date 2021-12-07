import Template from "../BoxTemplate";
import Description from "../Description";
import './FavoriteStays.css';
import '../Description.css'
const FavouriteStays = () => {
    const heading = ["Find Your","favourite stays!"]
    const description = "A new city might feel too new to roam around and look for a decent rental stay, is'nt it? No need to worry, find the best PG in few clicks!"
    const favStays = [
        {
            id:0,
            name:'PG',
            alter:'Paying Guest',
            text:'Paying Guest(PG)'
        },
        {
            id:1,
            name:'Apartment',
            alter:'Flat/Apartment',
            text:'Flat/Apartment'
        },
        {
            id:2,
            name:'IndependentRoom',
            alter:'IndependentRoom',
            text:'Independent Room'
        },
    ]

    return ( 
        <div className="favouritestays">
            <Description head={heading} para={description}/>
            <Template images={favStays} />
        </div>
     );
}
 
export default FavouriteStays;