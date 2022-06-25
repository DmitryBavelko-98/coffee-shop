import './catalogSearch.scss';

const CatalogSearch = () => {
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
                            <button className="catalog-search__filter">Brazil</button>
                            <button className="catalog-search__filter">Kenya</button>
                            <button className="catalog-search__filter">Columbia</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CatalogSearch;