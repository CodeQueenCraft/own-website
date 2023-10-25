import "./CardSlider.css";

interface Props {
  children?: React.ReactNode;
  id?: string;
}

function CardSlider() {
  return (
    <section className="section cardslider">
      <input
        type="radio"
        name="slider"
        id="slide-1"
        className="slider__radio"
        defaultChecked
      />
      <input
        type="radio"
        name="slider"
        id="slide-2"
        className="slider__radio"
      />
      <input
        type="radio"
        name="slider"
        id="slide-3"
        className="slider__radio"
      />

      <div className="slider__holder">
        <label htmlFor="slide-1" className="slider__item slider__item--1 card">
          <div className="slider__item-content">
            <div className="test"></div>
          </div>
        </label>

        <label htmlFor="slide-2" className="slider__item slider__item--2 card">
          <div className="slider__item-content"></div>
        </label>

        <label htmlFor="slide-3" className="slider__item slider__item--3 card">
          <div className="slider__item-content"></div>
        </label>
      </div>
    </section>
  );
}

export default CardSlider;
