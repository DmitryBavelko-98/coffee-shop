import { useState } from "react";

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
import CatalogSearchPanel from "../catalogSearchPanel/CatalogSearchPanel";

import catalogImage from "../../resources/img/catalogInfo/info-1.jpg"
import pleasureImage from "../../resources/img/catalogInfo/info-2.jpg";
import CatalogFilters from "../catalogFilters/CatalogFilters";

import bestOne from '../../resources/img/ourBest/1.svg';
import bestTwo from '../../resources/img/ourBest/2.svg';
import bestThree from '../../resources/img/ourBest/3.svg';

const App = () => {
  const goods = [
    {id: 1, country: 'Kenya', title: 'Solimo Coffee Beans 2 kg', price: '10.73$', img: bestOne},
    {id: 2, country: 'Columbia', title: 'Presto Coffee Beans 1 kg', price: '15.99$', img: bestTwo},
    {id: 3, country: 'Brazil', title: 'AROMISTICO Coffee 1 kg', price: '6.99$', img: bestThree},
    {id: 4, country: 'Brazil', title: 'AROMISTICO Coffee 2 kg', price: '6.99$', img: bestThree},
    {id: 5, country: 'Brazil', title: 'AROMISTICO Coffee 3 kg', price: '6.99$', img: bestThree},
    {id: 6, country: 'Brazil', title: 'AROMISTICO Coffee 5 kg', price: '6.99$', img: bestThree},
  ]

  const [main, setMain] = useState(true);
  const [catalog, setCatalog] = useState(false);
  const [pleasure, setPleasure] = useState(false);
  const [data, setData] = useState(goods);
  const [showProduct, setShowProduct] = useState(false);
  const [filter, setFilter] = useState('All');
  const [term, setTerm] = useState('');
  const [current, setCurrent] = useState(null);


  function onMain() {
    setMain(true);
    setCatalog(false);
    setPleasure(false);
    setShowProduct(false);
  }

  function onCatalog() {
    setMain(false);
    setCatalog(true);
    setPleasure(false);
    setShowProduct(false);
  }

  function onPleasure() {
    setMain(false);
    setCatalog(false);
    setPleasure(true);
    setShowProduct(false);
  }

  function onProduct(id) {
    setMain(false);
    setCatalog(false);
    setPleasure(false);
    setShowProduct(true);
    setCurrent(id);
  }

  function onFilter(filter) {
    setFilter(filter)
  }

  function filterCoffee(items, filter) {
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

  function onUpdateSearch (term) {
    setTerm(term)
  }

  function searchCoffee (items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.title.toLowerCase().includes(term);
    })
  }

  const visibleData = searchCoffee(filterCoffee(data, filter), term);
  const product = visibleData[current - 1];

  const content = main ? <>
      <MainIntro/>
      <AboutUs/>
      <OurBest data={data.slice(0, 3)}/>
  </> : null;

  const products = catalog ? <>
      <CatalogIntro/>
      <CatalogInfo title='none' image={catalogImage}/>
      <CatalogSearch 
        filters={<CatalogFilters filter={filter} onFilter={onFilter}/>}
        panel={<CatalogSearchPanel onUpdateSearch={onUpdateSearch}/>}/>
      <CatalogList data={visibleData} onProduct={onProduct}/>
  </> : null;

  const pleas = pleasure ? <>
      <PleasureIntro/>
      <CatalogInfo title='block' image={pleasureImage}/>
      <CatalogList data={visibleData} onProduct={onProduct}/>
  </> : null;

  const productPage = showProduct ? <>
      <CatalogIntro/>
      <CatalogProduct data={product}/>
  </>  : null;

  return (
    <div className="App">
      <AppHeader onMain={onMain} onCatalog={onCatalog} onPleasure={onPleasure}/>
      {content}
      {products}
      {pleas}
      {productPage}
      <AppFooter onMain={onMain} onCatalog={onCatalog} onPleasure={onPleasure}/>
    </div>
  );
}

export default App;
