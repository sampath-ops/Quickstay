import HeroTitle from './HeroTitle';
import HeroSearchBar from './HeroSearchBar';
import './Hero.css';
import heroImg from '../../WebsiteMaterial/living-room.jpg';
import SecondSearchbar from './SecondSearchbar';
const Hero = () => {
    return ( 
        <div className="hero" style={{
            background:`url(${heroImg}) no-repeat center center fixed`,
            backgroundSize: "cover",
           
        }}>
            <div className="hero-container">
               <div>
                    <HeroTitle/>
                    <HeroSearchBar/>
                    <SecondSearchbar/>
               </div>
            </div>
        </div>
     );
}
 
export default Hero;