import '../catalogSearch/catalogSearch.scss';

const CatalogFilters = (props) => {
    const buttons = [
        {id: 'All', label: 'All'},
        {id: 'Brazil', label: 'Brazil'},
        {id: 'Kenya', label: 'Kenya'},
        {id: 'Columbia', label: 'Columbia'}
    ];

    const filters = buttons.map(({id, label}) => {
        const active = props.filter === id;
        const style = active ? {backgroundColor: '#d69595'} : {};
        return (
            <button 
                type="button"
                style={style}
                key={id} 
                onClick={() => props.onFilter(id)}
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