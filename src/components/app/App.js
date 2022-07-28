import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppFooter from "../appFooter/AppFooter";
import AppHeader from "../appHeader/AppHeader";
import { MainPage, CatalogPage, PleasurePage } from "../pages";

import bestOne from '../../resources/img/ourBest/1.svg';
import bestTwo from '../../resources/img/ourBest/2.svg';
import bestThree from '../../resources/img/ourBest/3.svg';
import ProductPage from "../pages/ProductPage";

const App = () => {
  const goods = [
    {id: 1, country: 'Kenya', title: 'Solimo Coffee Beans 2 kg', price: '10.73$', img: bestOne},
    {id: 2, country: 'Columbia', title: 'Presto Coffee Beans 1 kg', price: '15.99$', img: bestTwo},
    {id: 3, country: 'Brazil', title: 'AROMISTICO Coffee 1 kg', price: '6.99$', img: bestThree},
    {id: 4, country: 'Brazil', title: 'AROMISTICO Coffee 2 kg', price: '7.99$', img: bestThree},
    {id: 5, country: 'Brazil', title: 'AROMISTICO Coffee 3 kg', price: '8.99$', img: bestThree},
    {id: 6, country: 'Brazil', title: 'AROMISTICO Coffee 5 kg', price: '9.99$', img: bestThree},
  ]

  const [data, setData] = useState(goods);
  const [current, setCurrent] = useState(null);
    
  function onProduct(id) {
      setCurrent(id);
  }

  return (
    <Router>
      <div className="App">
        <AppHeader/>
        <Routes>
          <Route path="/coffee-shop" element={<MainPage data={data}/>}/>
          <Route path="/coffee-shop/catalog" element={<CatalogPage data={data} onProduct={onProduct}/>}/>
          <Route path="/coffee-shop/pleasure" element={<PleasurePage data={data} onProduct={onProduct}/>}/>
          <Route path="/coffee-shop/product" element={<ProductPage data={data[current - 1]}/>}/>
        </Routes>
        <AppFooter/>
      </div>
    </Router>
  );
}

export default App;
