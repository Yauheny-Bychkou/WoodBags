import './style.css';

class Header {
  element = document.createElement('header');
  constructor() {
    this.element.classList.add('header');
    this.element.insertAdjacentHTML('afterbegin', this.getCode());
  }
  getCode() {
    return `
      <div class="container">
        <div class="header-wrapper">
          <nav class="header-wrapper__nav">
            <ul class="header-wrapper__list">
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">Главная</a>
              </li>
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">О бренде</a>
              </li>
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">Галерея</a>
              </li>
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">Уход</a>
              </li>
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">Заказать</a>
              </li>
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">Доставка и оплата</a>
              </li>
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">Доставка и оплата</a>
              </li>
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">Контакты</a>
              </li>
              <li class="header-wrapper__item">
                <a class="header-wrapper__link" href="#">Отзывы</a>
              </li>
              <li class="header-wrapper__item">
                <a href="#" class="header-wrapper__link">
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path fill="url(#a)" d="M0 0h30v30H0z" />
                    <defs>
                      <pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#b" transform="scale(.00195)" />
                      </pattern>
                      <image
                        id="b"
                        width="512"
                        height="512"
                        xlink:href="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    `;
  }
}
export default Header;
