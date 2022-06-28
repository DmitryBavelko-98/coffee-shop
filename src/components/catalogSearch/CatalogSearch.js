import './catalogSearch.scss';

const CatalogSearch = ({filter, onFilter}) => {
    const buttons = [
        {id: 'Brazil', label: 'Brazil'},
        {id: 'Kenya', label: 'Kenya'},
        {id: 'Columbia', label: 'Columbia'}
    ];

    const filters = buttons.map(({id, label}) => {
        const active = filter === id;
        const style = active ? {backgroundColor: 'red'} : {};
        return (
            <button 
                key={id} 
                style={style}
                onClick={() => onFilter(id)}
                className="catalog-search__filter">{label}</button>
        );
    })

    return (
        <section className="catalog-search">
            <div className="container">
                <div className="catalog-search__content">
                    <div className="catalog-search__lookingfor">
                        <label htmlFor="catalog-search__input">Lookiing for</label>
                        <input id='catalog-search__input' className="catalog-search__input" type="text" placeholder='start typing here...'/>
                    </div>
                    <div className="catalog-search__filters">
                        <div className="catalog-search__label">Or filter</div>
                        <div className="catalog-search__btns">
                            {filters}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CatalogSearch;