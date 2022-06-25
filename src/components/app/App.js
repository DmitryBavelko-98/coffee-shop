import AboutUs from "../aboutUs/AboutUs";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import CatalogInfo from "../catalogInfo/CatalogInfo";
import CatalogIntro from "../catalogIntro/CatalogIntro";
import CatalogSearch from "../catalogSearch/CatalogSearch";
import MainIntro from "../mainIntro/MainIntro";
import OurBest from "../ourBest/OurBest";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      {/* <MainIntro/> */}
      <CatalogIntro/>
      <CatalogInfo/>
      <CatalogSearch/>
      {/* <AboutUs/>
      <OurBest/> */}
      <AppFooter/>
    </div>
  );
}

export default App;
