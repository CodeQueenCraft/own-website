import "./CardSlider.css";
import CardsBachelor from "./CardsBachelor";

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
      <CardsBachelor />
    </section>
  );
}

export default CardSlider;
