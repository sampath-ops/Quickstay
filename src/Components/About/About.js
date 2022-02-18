import "./About.css"
import Hero from './Hero';
import AboutUs from './AboutUs';
import OurDream from './OurDream';
import Figures from './Figures';
import BecomeFamily from './BecomeFamily';
import MainSub from '../NavBar/MainSub';
import Locations from '../Home/PopularSearches/Locations/Location'
import {Helmet} from "react-helmet";

const About = (props) => {
    return (
        <MainSub searchedProperties={props.searchedProperties}  >
            <Helmet>
                <title>Easing the rental home search | About Us | QuickStay</title>
                <meta name="description" content="QuickStay is a digital solution for students & working professionals that makes the rental home search effortless by providing verified properties without brokerage." />
            </Helmet>
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