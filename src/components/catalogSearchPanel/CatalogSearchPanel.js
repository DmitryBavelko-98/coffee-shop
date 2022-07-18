import {useState} from 'react';
import '../catalogSearch/catalogSearch.scss';

const CatalogSearchPanel = (props) => {
    const [term, setTerm] = useState('');

    function onSearch(e) {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return (
        <>
        <label htmlFor="catalog-search__input">Looking for</label>
        <input 
            onChange={onSearch}
            id='catalog-search__input' 
            className="catalog-search__input" type="text" 
            placeholder='start typing here...'/>
        </>
    )
}

export default CatalogSearchPanel;