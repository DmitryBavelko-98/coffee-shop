import './catalogList.scss';
import img from '../../resources/img/catalogList/catalog-img.svg'

const CatalogList = ({data, onProduct}) => {

    const elements = data.map(item => {
        const {id, country} = item;
        return (
            <a 
                key={id}
                href="#"
                onClick={onProduct}
                className="catalog-list__item">
                <img src={img} alt="" className="catalog-list__img" />
                <div className="catalog-list__title">AROMISTICO Coffee 1 kg</div>
                <div className="catalog-list__country">{country}</div>
                <div className="catalog-list__price">6.99$</div>
            </a>
        );
    })

    return (
        <section className="catalog-list">
            <div className="container">
                <div className="catalog-list__items">
                    {elements}
                </div>
            </div>
        </section>
    );
}

export default CatalogList;