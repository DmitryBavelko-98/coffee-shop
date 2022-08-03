import { createContext } from "react";

import bestOne from '../resources/img/ourBest/1.svg';
import bestTwo from '../resources/img/ourBest/2.svg';
import bestThree from '../resources/img/ourBest/3.svg';

const dataContext = createContext([
    {id: 1, country: 'Kenya', title: 'Solimo Coffee Beans 2 kg', price: '10.73$', img: bestOne},
    {id: 2, country: 'Columbia', title: 'Presto Coffee Beans 1 kg', price: '15.99$', img: bestTwo},
    {id: 3, country: 'Brazil', title: 'AROMISTICO Coffee 1 kg', price: '6.99$', img: bestThree},
    {id: 4, country: 'Brazil', title: 'AROMISTICO Coffee 2 kg', price: '7.99$', img: bestThree},
    {id: 5, country: 'Brazil', title: 'AROMISTICO Coffee 3 kg', price: '8.99$', img: bestThree},
    {id: 6, country: 'Brazil', title: 'AROMISTICO Coffee 5 kg', price: '9.99$', img: bestThree},
  ]); 

const productContext = createContext(0);

export {dataContext, productContext};
