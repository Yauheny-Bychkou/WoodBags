import './style.css';

class Collage {
  element = document.createElement('section');
  containerCollage = document.createElement('div');
  collageWrapper = document.createElement('div');
  collageLeft = document.createElement('div');
  collageRight = document.createElement('div');

  collageLeftTop = document.createElement('div');
  collageLeftMiddle = document.createElement('div');
  collageLeftBottom = document.createElement('div');

  collageLeftTopImg = document.createElement('img');
  collageLeftMiddleImg = document.createElement('img');
  collageLeftBottomImg = document.createElement('img');

  collageRightTop = document.createElement('div');
  collageRightMiddle = document.createElement('div');
  collageRightBottom = document.createElement('div');

  collageRightTopImg = document.createElement('img');
  collageRightMiddleImg = document.createElement('img');
  collageRightBottomImg = document.createElement('img');
  constructor() {
    this.addClassList();
    this.addContent();
    this.appendWrapper();
    // this.element.insertAdjacentHTML('beforeend', this.getCode());
  }
  addClassList() {
    this.element.classList.add('collage', 'none');
    this.containerCollage.classList.add('container-collage');
    this.collageWrapper.classList.add('collage-wrapper');
    this.collageLeft.classList.add('collage-left');
    this.collageRight.classList.add('collage-right');
    this.collageLeftTop.classList.add('collage-left__top');
    this.collageLeftMiddle.classList.add('collage-left__middle');
    this.collageLeftBottom.classList.add('collage-left__bottom');

    this.collageLeftTopImg.classList.add('collage-left__top-img');
    this.collageLeftMiddleImg.classList.add('collage-left__middle-img');
    this.collageLeftBottomImg.classList.add('collage-left__bottom-img');

    this.collageRightTop.classList.add('collage-right__top');
    this.collageRightMiddle.classList.add('collage-right__middle');
    this.collageRightBottom.classList.add('collage-right__bottom');

    this.collageRightTopImg.classList.add('collage-right__top-img');
    this.collageRightMiddleImg.classList.add('collage-right__middle-img');
    this.collageRightBottomImg.classList.add('collage-right__bottom-img');
  }
  addContent() {
    this.collageLeftTopImg.setAttribute('src', 'left-1.jpg');
    this.collageLeftMiddleImg.setAttribute('src', 'left-2.jpg');
    this.collageLeftBottomImg.setAttribute('src', 'left-3.jpg');
    this.collageLeftTopImg.setAttribute('alt', 'image');
    this.collageLeftMiddleImg.setAttribute('alt', 'image');
    this.collageLeftBottomImg.setAttribute('alt', 'image');
    this.collageLeftTopImg.setAttribute('loading', 'lazy');
    this.collageLeftMiddleImg.setAttribute('loading', 'lazy');
    this.collageLeftBottomImg.setAttribute('loading', 'lazy');

    this.collageRightTopImg.setAttribute('src', 'right-1.jpg');
    this.collageRightMiddleImg.setAttribute('src', 'right-2.jpg');
    this.collageRightBottomImg.setAttribute('src', 'right-3.jpg');
    this.collageRightTopImg.setAttribute('alt', 'image');
    this.collageRightMiddleImg.setAttribute('alt', 'image');
    this.collageRightBottomImg.setAttribute('alt', 'image');
    this.collageRightTopImg.setAttribute('loading', 'lazy');
    this.collageRightMiddleImg.setAttribute('loading', 'lazy');
    this.collageRightBottomImg.setAttribute('loading', 'lazy');
  }
  appendWrapper() {
    this.collageLeftTopImg.onload = () => this.collageLeftTop.append(this.collageLeftTopImg);
    this.collageLeftMiddleImg.onload = () => this.collageLeftMiddle.append(this.collageLeftMiddleImg);
    this.collageLeftBottomImg.onload = () => this.collageLeftBottom.append(this.collageLeftBottomImg);

    this.collageRightTopImg.onload = () => this.collageRightTop.append(this.collageRightTopImg);
    this.collageRightMiddleImg.onload = () => this.collageRightMiddle.append(this.collageRightMiddleImg);
    this.collageRightBottomImg.onload = () => this.collageRightBottom.append(this.collageRightBottomImg);

    this.collageRight.append(this.collageRightTop, this.collageRightMiddle, this.collageRightBottom);
    this.collageLeft.append(this.collageLeftTop, this.collageLeftMiddle, this.collageLeftBottom);
    this.collageWrapper.append(this.collageLeft, this.collageRight);
    this.containerCollage.append(this.collageWrapper);
    this.element.append(this.containerCollage);
  }
  getCode() {
    return `
     <div class="container-collage">
      <div class="collage-wrapper">
        <div class="collage-left">
          <div class="collage-left__top">
            <img class="collage-left__top-img" src="left-1.jpg" alt="picture" loading="lazy"  />
          </div>
          <div class="collage-left__middle">
            <img class="collage-left__middle-img" src="left-2.jpg" alt="picture" loading="lazy"  />
          </div>
          <div class="collage-left__bottom">
            <img class="collage-left__bottom-img" src="left-3.jpg" alt="picture" loading="lazy"  />
          </div>
        </div>
        <div class="collage-right">
          <div class="collage-right__top">
            <img class="collage-right__top-img" src="right-1.jpg" alt="picture" loading="lazy"  />
          </div>
          <div class="collage-right__middle">
            <img class="collage-right__middle-img" src="right-2.jpg" alt="picture" loading="lazy"  />
          </div>
          <div class="collage-right__bottom">
            <img class="collage-right__bottom-img" src="right-3.jpg" alt="picture" loading="lazy"  />
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
export default Collage;
