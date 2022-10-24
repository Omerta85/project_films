import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './Footer.module.css';
import logo from '../../assets/image/OMERTA-removebg-preview.png'
import instagram from '../../assets/image/instagram.png'
import telegram from '../../assets/image/telegram.png'
import linkedin from '../../assets/image/linkedin.png'
import flag from '../../assets/image/flag.png'

const Footer = () => {

    const {themes} = useSelector(state => state.themeReducer);

    return (
        <footer>

            <div className={css.footer_container} id={themes.header}>
                <div className={css.start_logo}>
                    <img src={logo} alt="footer__logo"/>
                </div>

                <div className={css.footer_logo}><a href="https://en.wikipedia.org/wiki/Ukraine"><img src={flag} alt=""/>
                </a>СЛАВА УКРАЇНІ!</div>

                <div className={css.contact_logo}>
                    <a href="https://t.me/MyroslavZastavnyi"><img className="footer__contacts-item" src={telegram} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/zastavnyjmiroslav/"><img className="footer__contacts-item" src={instagram}
                                                                                alt=""/></a>
                    <a href="https://www.linkedin.com/in/myroslav-zastavnyi-1aa98566/"><img className="footer__contacts-item"
                                                                                            src={linkedin} alt=""/></a>
                    Please Contact</div>


            </div>

        </footer>
    )

};

export {Footer};