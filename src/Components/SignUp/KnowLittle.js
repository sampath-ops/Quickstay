import Favourite from './Favourite';

const KnowLittle = (props) => {
    const images = [
        {
            name:'Music Lover',
            text:'Music Lover'
        },
        {
            name:'Non-Veg Lover',
            text:'Non-Veg Lover'
        },
        {
            name:'Party Lover',
            text:'Party Lover'
        },
        {
            name:'Eggitarian',
            text:'Eggitarian'
        },
        {
            name:'Traveller',
            text:'Traveller'
        },
        {
            name:'Non-Alcoholic',
            text:'Non-Alcoholic'
        },
        {
            name:'Book Reader',
            text:'Book Reader'
        },
        {
            name:'Non-Smoker',
            text:'Non-Smoker'
        },
        {
            name:'Hygienic',
            text:'Hygienic'
        }

    ]

    return ( 
        <div className="know-little">
            <p>Let’s get to know you a little!</p>
            <div className="favourites_of_users">
                {
                    images.map((img,index)=>(
                        <Favourite img={img} key={index} index={index} getFav={props.getInterest}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default KnowLittle;