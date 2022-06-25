import './aboutUs.scss'
import beans from '../../resources/img/aboutUs/about-logo.svg'

const AboutUs = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__content">
                    <h2 className="about__title title">About Us</h2>
                    <img className='about__logo' src={beans} alt="about-logo"/>
                    <div className="about__text">
                        <p className='about__paragraph'>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                        <p className='about__paragraph'>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;