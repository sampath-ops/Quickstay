import Hero from './Hero/Hero';
import Offer from './Offers/Offer';
import FavouriteStays from './FavouriteStays/FavouriteStays';
import WhyStay from './WhyStay/WhyStay';
import ReferEarn from './ReferEarn/ReferEarn';
import ExclusiveProperty from './ExclusiveProperty/ExclusiveProperty';
import Blogs from './Blogs/Blogs';
import GetToKnow from './GetToKnow/GetToKnow';
import PopularSearches from './PopularSearches/PopularSearches';
import Follow from './FollowAndFind/Follow';
import Find from './FollowAndFind/Find';
import Download from './Download/Download';
import Locations from './PopularSearches/Locations/Location';
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
            <Follow/>
            <Find/>
            <Download/>
            <Locations/>
            <PopularSearches/>
            
        </div>
     );
}
 
export default Home;