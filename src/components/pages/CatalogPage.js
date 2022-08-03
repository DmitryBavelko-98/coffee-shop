import { useState, useContext } from "react";
import {dataContext} from "../context";
import CatalogSearch from "../catalogSearch/CatalogSearch";
import CatalogSearchPanel from "../catalogSearchPanel/CatalogSearchPanel";
import catalogImage from "../../resources/img/catalogInfo/info-1.jpg"
import CatalogFilters from "../catalogFilters/CatalogFilters";
import CatalogInfo from "../catalogInfo/CatalogInfo";
import CatalogIntro from "../catalogIntro/CatalogIntro";
import CatalogList from "../catalogList/CatalogList";

const {Provider} = dataContext;

const CatalogPage = ({onProduct}) => {

    const context = useContext(dataContext);

    const [filter, setFilter] = useState('All');
    const [term, setTerm] = useState('');

    function searchCoffee (items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => item.title.toLowerCase().includes(term));
    };

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

    const onUpdateSearch = (term) => {
        setTerm(term)
    }

    const visibleData = searchCoffee(filterCoffee(context, filter), term);

    return (
        <Provider value={visibleData}>  
            <CatalogIntro/>
            <CatalogInfo title='none' image={catalogImage}/>
            <CatalogSearch 
                filters={<CatalogFilters filter={filter} onFilter={onFilter}/>}
                panel={<CatalogSearchPanel onUpdateSearch={onUpdateSearch}/>}/>
            <CatalogList onProduct={onProduct}/>
        </Provider>
    );
}

export default CatalogPage;