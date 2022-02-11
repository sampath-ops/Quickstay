import "./About.css"
import Hero from './Hero';
import AboutUs from './AboutUs';
import OurDream from './OurDream';
import Figures from './Figures';
import BecomeFamily from './BecomeFamily';
import MainSub from '../NavBar/MainSub';
import Locations from '../Home/PopularSearches/Locations/Location'

const About = (props) => {
    return (
        <MainSub searchedProperties={props.searchedProperties}  >
            <div id="page-wrap">
            <Hero/>
            <AboutUs/>
            <OurDream/>
            <Figures/>
            <BecomeFamily/>
            <Locations getAllProperties={props.allProperties}/>
            </div>
        </MainSub>
    )
}

export default About;