import './appHeader.scss';
import logo from '../../resources/img/appHeader/logo.svg'

const AppHeader = ({onMain, onCatalog, onPleasure}) => {
    return (
        <header className="header">
            <div className="container">
                <ul className='header__content'>
                    <li className="header__item">
                        <a href="#" onClick={onMain} className="header__logo"><img src={logo} alt="logo"/></a>
                    </li>
                    <li className="header__item">
                        <a onClick={onCatalog} href="#">Our coffee</a>
                    </li>
                    <li className="header__item">
                        <a onClick={onPleasure} href="#">For your pleasure</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default AppHeader;