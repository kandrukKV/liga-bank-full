import React from 'react';
import './footer.scss';
import sprites from '../../img/footer-sprites.svg';
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap theme-container">
        <div className="footer__logo">
          <Logo/>
        </div>
        <div className="footer__name">
          <p className="footer__desc">150015, г. Москва, ул. Московская, д. 32</p>
          <p className="footer__desc">Генеральная лицензия Банка России №1050</p>
          <p className="footer__desc">Ⓒ Лига Банк, 2019</p>
        </div>
        <ul className="footer__nav-list">
          <li className="footer__nav-item"><a href="#">Услуги</a></li>
          <li className="footer__nav-item"><a href="#">Рассчитать кредит</a></li>
          <li className="footer__nav-item"><a href="#">Контакты</a></li>
          <li className="footer__nav-item"><a href="#">Задать вопрос</a></li>
        </ul>
        <div className="footer__phone footer__service">
          <svg className="footer__phone-img" width="10" height="16">
            <use href={sprites + `#phone-one` }/>
          </svg>
          <p className="footer__number">*0904</p>
          <p className="footer__desc">Бесплатно для абонентов</p>
          <p className="footer__desc">МТС, Билайн, Мегафон, Теле2</p>
        </div>
        <div className="footer__phone footer__mobile">
          <svg className="footer__phone-img" width="16" height="16">
            <use href={sprites + `#phone-two` }/>
          </svg>
          <p className="footer__number">8 800 111 22 33</p>
          <p className="footer__desc">Бесплатный для всех</p>
          <p className="footer__desc">городов России</p>
        </div>
        <ul className="footer__social-list">

          <li className="footer__social-item">
            <a href="http://facebook.com">
              <svg className="footer__icon" width="9" height="16">
                <use href={sprites + `#fb`}/>
              </svg>
            </a>
          </li>

          <li className="footer__social-item">
            <a href="http://instagramm.com">
              <svg className="footer__icon" width="16" height="16">
                <use href={sprites + `#inst`}/>
              </svg>
            </a>
          </li>

          <li className="footer__social-item">
            <a href="http://twitter.com">
              <svg className="footer__icon" width="16" height="13">
                <use href={sprites + `#tw`}/>
              </svg>
            </a>
          </li>

          <li className="footer__social-item">
            <a href="http://youtube.com">
              <svg className="footer__icon" width="16" height="13">
                <use href={sprites + `#youtube`}/>
              </svg>
            </a>
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;

