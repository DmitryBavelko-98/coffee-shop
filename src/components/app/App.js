import { Component } from "react";

import AboutUs from "../aboutUs/AboutUs";
import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import CatalogInfo from "../catalogInfo/CatalogInfo";
import CatalogIntro from "../catalogIntro/CatalogIntro";
import CatalogList from "../catalogList/CatalogList";
import CatalogProduct from "../catalogProduct/CatalogProduct";
import CatalogSearch from "../catalogSearch/CatalogSearch";
import MainIntro from "../mainIntro/MainIntro";
import OurBest from "../ourBest/OurBest";
import PleasureIntro from "../pleasureIntro/PleasureIntro";

import catalogImage from "../../resources/img/catalogInfo/info-1.jpg"
import pleasureImage from "../../resources/img/catalogInfo/info-2.jpg";

class App extends Component {
  state = {
    main: true,
    catalog: false,
    pleasure: false,
    data: [
      {id: 1, country: 'Brazil'},
      {id: 2, country: 'Kenya'},
      {id: 3, country: 'Columbia'},
      {id: 4, country: 'Brazil'},
      {id: 5, country: 'Brazil'},
      {id: 6, country: 'Brazil'},
    ],
    showProduct: false
  }

  onMain = () => {
    this.setState({
      main: true,
      catalog: false,
      pleasure: false,
      showProduct: false
    })
  }

  onCatalog = () => {
    this.setState({
      main: false,
      catalog: true,
      pleasure: false,
      showProduct: false
    })
  }

  onPleasure = () => {
    this.setState({
      main: false,
      catalog: false,
      pleasure: true,
      showProduct: false
    })
  }

  onProduct = () => {
    this.setState({
      main: false,
      catalog: false,
      pleasure: false,
      showProduct: true
    })
  }

  render() {
    const {main, catalog, pleasure, data, showProduct} = this.state;

    const content = main ? <>
        <MainIntro/>
        <AboutUs/>
        <OurBest/>
    </> : null;

    const products = catalog ? <>
        <CatalogIntro/>
        <CatalogInfo title='none' image={catalogImage}/>
        <CatalogSearch/>
        <CatalogList data={data} onProduct={this.onProduct}/>
    </> : null;

    const pleas = pleasure ? <>
        <PleasureIntro/>
        <CatalogInfo title='block' image={pleasureImage}/>
        <CatalogList data={data} onProduct={this.onProduct}/>
    </> : null;

    const product = showProduct ? <>
        <CatalogIntro/>
        <CatalogProduct/>
    </>  : null;

    return (
      <div className="App">
        <AppHeader onMain={this.onMain} onCatalog={this.onCatalog} onPleasure={this.onPleasure}/>
        {content}
        {products}
        {pleas}
        {product}
        <AppFooter onMain={this.onMain} onCatalog={this.onCatalog} onPleasure={this.onPleasure}/>
      </div>
    );
  }
}

export default App;
