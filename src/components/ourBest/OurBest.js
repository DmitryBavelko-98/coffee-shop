
import './ourBest.scss';

const OurBest = ({data}) => {

    const items = data.map(item => {
        const {id, title, price, img} = item;
        return (
            <a key={id} href="#" className="best__item item-best">
                <img src={img} alt="" className="item-best__img" />
                <div className="item-best__title">{title}</div>
                <div className="item-best__price">{price}</div>
            </a>
        )
    })

    return (
        <section className="best">
            <div className="container">
                <h2 className="best__title title">Our best</h2>
                <div className="best__items">
                    {items}
                </div>
            </div>
        </section>
    );
}

export default OurBest;