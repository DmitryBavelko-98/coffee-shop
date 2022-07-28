import { Link } from "react-router-dom";

import './appHeader.scss';
import logo from '../../resources/img/appHeader/logo.svg'

const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <ul className='header__content'>
                    <li className="header__item">
                        <Link to="/coffee-shop" className="header__logo"><img src={logo} alt="logo"/></Link>
                    </li>
                    <li className="header__item">
                        <Link to="/coffee-shop/catalog">Our coffee</Link>
                    </li>
                    <li className="header__item">
                        <Link to="/coffee-shop/pleasure">For your pleasure</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default AppHeader;