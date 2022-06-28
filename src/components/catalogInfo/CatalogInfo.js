import './catalogInfo.scss'
import beans from '../../resources/img/aboutUs/about-logo.svg'

const CatalogInfo = ({image,title}) => {

    let style = {display: title}

    return (
        <section className="catalog-info">
            <div className="container">
                <div className="catalog-info__content">
                    <img src={image} alt="catalog-image" className="catalog-info__img"/>
                    <div className="catalog-info__desc">
                        <h2 style={style} className='catalog-info__title'>About our goods</h2>
                        <img src={beans} alt="catalog-info-logo" className="catalog-info__logo" />
                        <div className="catalog-info__text">
                            <p className="catalog-info__paragraph">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            </p>
                            <p className="catalog-info__paragraph">
                            Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel <br />
                            met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CatalogInfo;