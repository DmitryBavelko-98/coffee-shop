import './catalogProduct.scss';
import product from '../../resources/img/catalogProduct/product-img.svg'

const CatalogProduct = () => {
    return (
        <section className="catalog-product">
            <div className="container">
                <div className="catalog-product__body">
                    <img src={product} alt="product" className="catalog-product__img"/>
                    <div className="catalog-product__content">
                        <h3 className="catalog-product__title">About it</h3>
                        <div className="catalog-product__country"><span>Country:</span> Brasil</div>
                        <div className="catalog-product__description"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div className="catalog-product__price">Price:  <span>16.99$</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CatalogProduct;
