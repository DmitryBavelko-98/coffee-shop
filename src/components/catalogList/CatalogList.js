import { Link } from "react-router-dom";
import './catalogList.scss';

const CatalogList = ({data, onProduct}) => {
    const elements = data.map(item => {
        const {id, country, title, price, img} = item;
        return (
            <Link 
                key={id}
                to="/coffee-shop/product"
                onClick={() => onProduct(id)}
                className="catalog-list__item">
                <img src={img} alt="" className="catalog-list__img" />
                <div className="catalog-list__title">{title}</div>
                <div className="catalog-list__country">{country}</div>
                <div className="catalog-list__price">{price}</div>
            </Link>
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