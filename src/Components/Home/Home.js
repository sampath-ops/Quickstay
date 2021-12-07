import Hero from './Hero/Hero';
import Offer from './Offers/Offer';
import FavouriteStays from './FavouriteStays/FavouriteStays';
import WhyStay from './WhyStay/WhyStay';
import ReferEarn from './ReferEarn/ReferEarn';
import ExclusiveProperty from './ExclusiveProperty/ExclusiveProperty';
import Blogs from './Blogs/Blogs';
import GetToKnow from './GetToKnow/GetToKnow';
import PopularSearches from './PopularSearches/PopularSearches';
const Home = () => {
    return ( 
        <div>
            <Hero/>
            <Offer/>
            <FavouriteStays/>
            <ReferEarn/>
            <ExclusiveProperty/>
            <WhyStay/>
            <Blogs/>
            <GetToKnow/>
            <PopularSearches/>
        </div>
     );
}
 
export default Home;