import './appFooter.scss';

import logo from "../../resources/img/appFooter/Logo.svg";
import img from "../../resources/img/aboutUs/about-logo.svg";

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="container">
                <ul className='footer__content'>
                    <li className="footer__item">
                        <a href="#" className="header__logo"><img src={logo} alt="logo"/></a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Our coffee</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">For your pleasure</a>
                    </li>
                </ul>
                <img src={img} alt="" className="footer__img" />
            </div>
        </footer>
    );
}

export default AppFooter;