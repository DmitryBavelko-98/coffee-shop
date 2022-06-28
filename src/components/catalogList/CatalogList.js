import './catalogList.scss';
import img from '../../resources/img/catalogList/catalog-img.svg'

const CatalogList = () => {
    return (
        <section className="catalog-list">
            <div className="container">
                <div className="catalog-list__items">
                    <a href='#' className="catalog-list__item">
                        <img src={img} alt="" className="catalog-list__img" />
                        <div className="catalog-list__title">AROMISTICO Coffee 1 kg</div>
                        <div className="catalog-list__country">Brazil</div>
                        <div className="catalog-list__price">6.99$</div>
                    </a>
                    <a href='#' className="catalog-list__item">
                        <img src={img} alt="" className="catalog-list__img" />
                        <div className="catalog-list__title">AROMISTICO Coffee 1 kg</div>
                        <div className="catalog-list__country">Kenya</div>
                        <div className="catalog-list__price">6.99$</div>
                    </a>
                    <a href='#' className="catalog-list__item">
                        <img src={img} alt="" className="catalog-list__img" />
                        <div className="catalog-list__title">AROMISTICO Coffee 1 kg</div>
                        <div className="catalog-list__country">Columbia</div>
                        <div className="catalog-list__price">6.99$</div>
                    </a>
                    <a href='#' className="catalog-list__item">
                        <img src={img} alt="" className="catalog-list__img" />
                        <div className="catalog-list__title">AROMISTICO Coffee 1 kg</div>
                        <div className="catalog-list__country">Brazil</div>
                        <div className="catalog-list__price">6.99$</div>
                    </a>
                    <a href='#' className="catalog-list__item">
                        <img src={img} alt="" className="catalog-list__img" />
                        <div className="catalog-list__title">AROMISTICO Coffee 1 kg</div>
                        <div className="catalog-list__country">Brazil</div>
                        <div className="catalog-list__price">6.99$</div>
                    </a>
                    <a href='#' className="catalog-list__item">
                        <img src={img} alt="" className="catalog-list__img" />
                        <div className="catalog-list__title">AROMISTICO Coffee 1 kg</div>
                        <div className="catalog-list__country">Brazil</div>
                        <div className="catalog-list__price">6.99$</div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CatalogList;