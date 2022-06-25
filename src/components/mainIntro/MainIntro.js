import './mainIntro.scss';
import beans from '../../resources/img/mainIntro/intro-logo.svg'

const MainIntro = () => {
    return (
        <section className='intro'>
            <div className='container'>
                <div className='intro__content'>
                    <h1 className='intro__title main-title'>Everything You Love About Coffee</h1>
                    <img className='intro__logo' src={beans} alt='intro-logo'/>
                    <h2 className='intro__text'>
                        <p>We makes every day full of energy and taste</p>
                        <p>Want to try our beans?</p>
                    </h2>
                    <button className='intro__btn'>More</button>
                </div>
            </div>
        </section>
    )
}

export default MainIntro;