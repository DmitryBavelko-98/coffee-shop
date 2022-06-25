import './appHeader.scss';
import logo from '../../resources/img/appHeader/logo.svg'

const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <ul className='header__content'>
                    <li className="header__item">
                        <a href="#" className="header__logo"><img src={logo} alt="logo"/></a>
                    </li>
                    <li className="header__item">
                        <a href="#">Our coffee</a>
                    </li>
                    <li className="header__item">
                        <a href="#">For your pleasure</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default AppHeader;