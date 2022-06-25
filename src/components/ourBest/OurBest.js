import './ourBest.scss';
import bestOne from '../../resources/img/ourBest/1.svg';
import bestTwo from '../../resources/img/ourBest/2.svg';
import bestThree from '../../resources/img/ourBest/3.svg';

const OurBest = () => {
    return (
        <section className="best">
            <div className="container">
                <h2 className="best__title title">Our best</h2>
                <div className="best__items">
                    <a href="#" className="best__item item-best">
                        <img src={bestOne} alt="" className="item-best__img" />
                        <div className="item-best__title">Solimo Coffee Beans 2 kg</div>
                        <div className="item-best__price">10.73$</div>
                    </a>
                    <a href="#" className="best__item item-best">
                        <img src={bestTwo} alt="" className="item-best__img" />
                        <div className="item-best__title">Presto Coffee Beans 1 kg</div>
                        <div className="item-best__price">15.99$</div>
                    </a>
                    <a href="#" className="best__item item-best">
                        <img src={bestThree} alt="" className="item-best__img" />
                        <div className="item-best__title">AROMISTICO Coffee 1 kg</div>
                        <div className="item-best__price">6.99$</div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default OurBest;