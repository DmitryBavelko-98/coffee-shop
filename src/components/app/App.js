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
import CatalogFilters from "../catalogFilters/CatalogFilters";
import CatalogSearchPanel from "../catalogSearchPanel/CatalogSearchPanel";

class App extends Component {
  state = {
    main: true,
    catalog: false,
    pleasure: false,
    data: [
      {id: 1, country: 'Brazil', title: 'AROMISTICO Coffee 1 kg'},
      {id: 2, country: 'Kenya', title: 'Solimo Coffee Beans 2 kg'},
      {id: 3, country: 'Columbia', title: 'Presto Coffee Beans 1 kg'},
      {id: 4, country: 'Brazil', title: 'AROMISTICO Coffee 2 kg'},
      {id: 5, country: 'Brazil', title: 'AROMISTICO Coffee 3 kg'},
      {id: 6, country: 'Brazil', title: 'AROMISTICO Coffee 5 kg'},
    ],
    showProduct: false,
    filter: 'all',
    term: ''
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

  onFilter = (filter) => {
    this.setState({filter});
  }

  filterCoffee = (items, filter) => {
    switch (filter) {
      case 'Brazil':
        return items.filter(item => item.country === 'Brazil');
      case 'Kenya':
        return items.filter(item => item.country === 'Kenya');
      case 'Columbia':
        return items.filter(item => item.country === 'Columbia');
      default: 
        return items;
    }
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  searchCoffee = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.title.toLowerCase().includes(term);
    })
  }

  render() {
    const {main, catalog, pleasure, data, showProduct, filter, term} = this.state;
    const visibleData = this.searchCoffee(this.filterCoffee(data, filter), term);

    const content = main ? <>
        <MainIntro/>
        <AboutUs/>
        <OurBest/>
    </> : null;

    const products = catalog ? <>
        <CatalogIntro/>
        <CatalogInfo title='none' image={catalogImage}/>
        <CatalogSearch 
          filters={<CatalogFilters onFilter={this.onFilter}/>}
          panel={<CatalogSearchPanel onUpdateSearch={this.onUpdateSearch}/>}/>
        <CatalogList data={visibleData} onProduct={this.onProduct}/>
    </> : null;

    const pleas = pleasure ? <>
        <PleasureIntro/>
        <CatalogInfo title='block' image={pleasureImage}/>
        <CatalogList data={visibleData} onProduct={this.onProduct}/>
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
