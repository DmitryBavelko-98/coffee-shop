import { Link } from "react-router-dom";
import './appFooter.scss';

import logo from "../../resources/img/appFooter/Logo.svg";
import img from "../../resources/img/aboutUs/about-logo.svg";

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="container">
                <ul className='footer__content'>
                    <li className="footer__item">
                        <Link to="/coffee-shop" className="header__logo"><img src={logo} alt="logo"/></Link>
                    </li>
                    <li className="footer__item">
                        <Link to="/coffee-shop/catalog">Our coffee</Link>
                    </li>
                    <li className="footer__item">
                        <Link to="/coffee-shop/pleasure">For your pleasure</Link>
                    </li>
                </ul>
                <img src={img} alt="" className="footer__img" />
            </div>
        </footer>
    );
}

export default AppFooter;