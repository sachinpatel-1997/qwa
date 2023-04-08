import Header from './Components/Header';
import Category_Banner from './Components/CategoryBanner/Category_Banner';
import Popular_Sale from './Components/Popular_Sale_Card/Popular_Sale';
 import Footer from './Components/Footer/Footer';
import Popular_Coupons from './Components/Popular_Coupons_Card/Popular_Coupons';
 import SponsorAds from './Components/SponsorAds/SponsorAds';
 import PopularStores from './Components/PopularStores/PopularStores';
function App() {
  return (
    <div className="App">
      <Header/>
      <Category_Banner/>
      <Popular_Sale/>
      <Popular_Coupons/>
      <SponsorAds/>
      <PopularStores/>
       <Footer/> 
    </div>
  );
}

export default App;
