import './style.css';

class Collage {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('collage');
    this.element.insertAdjacentHTML('beforeend', this.getCode());
  }
  getCode() {
    return `
     <div class="container-collage">
      <div class="collage-wrapper">
        <div class="collage-left">
          <div class="collage-left__top">
            <img class="collage-left__top-img" src="left-1.jpg" alt="picture" />
          </div>
          <div class="collage-left__middle">
            <img class="collage-left__middle-img" src="left-2.jpg" alt="picture" />
          </div>
          <div class="collage-left__bottom">
            <img class="collage-left__bottom-img" src="left-3.jpg" alt="picture" />
          </div>
        </div>
        <div class="collage-right">
          <div class="collage-right__top">
            <img class="collage-right__top-img" src="right-1.jpg" alt="picture" />
          </div>
          <div class="collage-right__middle">
            <img class="collage-right__middle-img" src="right-2.jpg" alt="picture" />
          </div>
          <div class="collage-right__bottom">
            <img class="collage-right__bottom-img" src="right-3.jpg" alt="picture" />
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
export default Collage;
