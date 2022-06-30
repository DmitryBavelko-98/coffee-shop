import '../catalogSearch/catalogSearch.scss';

const CatalogFilters = ({filter, onFilter}) => {
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
        <>
            <div className="catalog-search__label">Or filter</div>
            <div className="catalog-search__btns">
                {filters}
            </div>
        </>
    )
}

export default CatalogFilters;