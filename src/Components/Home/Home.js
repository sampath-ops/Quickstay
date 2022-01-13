import Hero from './Hero/Hero';
import Offer from './Offers/Offer';
import FavouriteStays from './FavouriteStays/FavouriteStays';
import WhyStay from './WhyStay/WhyStay';
import ReferEarn from './ReferEarn/ReferEarn';
import ExclusiveProperty from './ExclusiveProperty/ExclusiveProperty';
import Blogs from './Blogs/Blogs';
import GetToKnow from './GetToKnow/GetToKnow';
import Follow from './FollowAndFind/Follow';
import Find from './FollowAndFind/Find';
import Download from './Download/Download';
import Locations from './PopularSearches/Locations/Location';
import Main from '../NavBar/Main';
import PopUpWrap from '../PopUp/PopUpWrap';

const Home = (props) => {

    return ( 
        <Main>
            <PopUpWrap/>
            <Hero searchedProperties={props.searchedProperties}/>
            <Offer/>
            <FavouriteStays/>
            <ReferEarn/>
            <ExclusiveProperty addPropDetailsHandler={props.addPropDetailsHandler} getAllProperties={props.allProperties}/>
            <WhyStay/>
            <Blogs/>
            <GetToKnow/>
            <Follow/>
            <Find/>
            <Download/>
            <Locations/>   
        </Main>
     );
}
 
export default Home;