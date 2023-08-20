class CardSlider {
  constructor(sliderElement) {
    this.slider = sliderElement;
    this.sliderContainer = sliderElement.querySelector(".slider-container");
    this.cards = sliderElement.querySelectorAll(".card");
    this.prevButton = sliderElement.querySelector('[data-direction="prev"]');
    this.nextButton = sliderElement.querySelector('[data-direction="next"]');
    this.cardWidth =
      this.cards[0].offsetWidth +
      parseInt(window.getComputedStyle(this.cards[0]).marginRight);
    this.currentIndex = 0;
    this.numVisibleCards = 2; // Adjust the number of visible cards as needed

    this.prevButton.addEventListener("click", () => this.slideCards(-1));
    this.nextButton.addEventListener("click", () => this.slideCards(1));

    this.sliderContainer.addEventListener(
      "touchstart",
      this.handleTouchStart.bind(this)
    );
    this.sliderContainer.addEventListener(
      "touchmove",
      this.handleTouchMove.bind(this)
    );
    this.sliderContainer.addEventListener(
      "touchend",
      this.handleTouchEnd.bind(this)
    );
  }

  handleTouchStart(event) {
    this.touchStartX = event.touches[0].clientX;
  }

  handleTouchMove(event) {
    const touchX = event.touches[0].clientX;
    const deltaX = touchX - this.touchStartX;
    const direction = deltaX > 0 ? -1 : 1;

    this.slideCards(direction);
  }

  handleTouchEnd() {
    this.touchStartX = 0;
  }

  slideCards(direction) {
    this.currentIndex += direction * this.numVisibleCards;
    this.currentIndex = Math.max(
      Math.min(this.currentIndex, this.cards.length - this.numVisibleCards),
      0
    );
    const translateX = -this.currentIndex * this.cardWidth;
    this.sliderContainer.style.transform = `translateX(${translateX}px)`;
  }
}

const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => new CardSlider(slider));

// Get all the clickable spans
function myfun() {
  document.getElementsByClassName("dropdown11").style.display='block';
  
  
}