import { useState } from "react";

import CatalogSearch from "../catalogSearch/CatalogSearch";
import CatalogSearchPanel from "../catalogSearchPanel/CatalogSearchPanel";
import catalogImage from "../../resources/img/catalogInfo/info-1.jpg"
import CatalogFilters from "../catalogFilters/CatalogFilters";
import CatalogInfo from "../catalogInfo/CatalogInfo";
import CatalogIntro from "../catalogIntro/CatalogIntro";
import CatalogList from "../catalogList/CatalogList";

const CatalogPage = ({data, onProduct}) => {
    const [filter, setFilter] = useState('All');
    const [term, setTerm] = useState('');
    
    function searchCoffee (items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.title.toLowerCase().includes(term);
        })
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

    const visibleData = searchCoffee(filterCoffee(data, filter), term);

    return (
        <>  
            <CatalogIntro/>
            <CatalogInfo title='none' image={catalogImage}/>
            <CatalogSearch 
                filters={<CatalogFilters filter={filter} onFilter={onFilter}/>}
                panel={<CatalogSearchPanel onUpdateSearch={onUpdateSearch}/>}/>
            <CatalogList data={visibleData} onProduct={onProduct}/>
        </>
    );
}

export default CatalogPage;