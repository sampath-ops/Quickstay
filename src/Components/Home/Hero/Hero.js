import HeroTitle from './HeroTitle';
import HeroSearchBar from './HeroSearchBar';
import './Hero.css';
import heroImg from '../../../WebsiteMaterial/Home/living-room.webp';
import SecondSearchbar from './SecondSearchbar';
const Hero = (props) => {
    return ( 
        <div className="hero" style={{
            background:`url(${heroImg})`,
            backgroundPosition: 'center center',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
           
        }}>
            <div className="hero-container">
               <div>
                    <HeroTitle/>
                    <HeroSearchBar searchedProperties={props.searchedProperties}/>
                    <SecondSearchbar/>
               </div>
            </div>
        </div>
     );
}
 
export default Hero;