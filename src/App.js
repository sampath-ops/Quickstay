import './App.css';
import Hero from './Components/Hero/Hero';
import Offer from './Components/Offers/Offer';
import FavouriteStays from './Components/FavouriteStays/FavouriteStays';
import WhyStay from './Components/WhyStay/WhyStay';
import ReferEarn from './Components/ReferEarn/ReferEarn';
function App() {
  return (
    <div>
      <Hero/>
      <Offer/>
      <FavouriteStays/>
      <ReferEarn/>
      <WhyStay/>
    </div>
  );
}

export default App;
