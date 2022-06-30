import {Component } from 'react';
import '../catalogSearch/catalogSearch.scss';

class CatalogSearchPanel extends Component {
    state = {
        term: ''
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <>
            <label htmlFor="catalog-search__input">Looking for</label>
            <input 
                onChange={this.onSearch}
                id='catalog-search__input' 
                className="catalog-search__input" type="text" 
                placeholder='start typing here...'/>
            </>
        )
    }
}

export default CatalogSearchPanel;