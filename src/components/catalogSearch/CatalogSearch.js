import './catalogSearch.scss';

const CatalogSearch = ({filters, panel}) => {
    return (
        <section className="catalog-search">
            <div className="container">
                <div className="catalog-search__content">
                    <div className="catalog-search__lookingfor">
                        {panel}
                    </div>
                    <div className="catalog-search__filters">
                        {filters}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CatalogSearch;