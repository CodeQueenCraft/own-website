import React from "react";
import "./CardSlider.css";
import { CardsBachelor, CardsOwnWebsite } from "./";

interface Props {
  componentId: string;
  numSlides: number;
  children?: React.ReactNode;
}

function CardSlider({ componentId, numSlides, children }: Props) {
  const slides = [];

  for (let i = 1; i <= numSlides; i++) {
    slides.push(
      <input
        key={i}
        type="radio"
        name="slider"
        id={`slide-${i}`}
        className="slider__radio"
        defaultChecked={i === 1}
      />
    );
  }

  const sliderItems = [];

  let ProjectComponent;

  switch (componentId) {
    case "Bachelor":
      ProjectComponent = CardsBachelor;
      break;
    case "OwnWebsite":
      ProjectComponent = CardsOwnWebsite;
      break;
    default:
      ProjectComponent = null;
  }

  for (let i = 1; i <= numSlides; i++) {
    if (ProjectComponent) {
      sliderItems.push(
        <label
          key={i}
          htmlFor={`slide-${i}`}
          className={`slider__item slider__item--${i} card`}
        >
          <div className="slider__item-content">
            <ProjectComponent id={`card-${i}`} />
          </div>
        </label>
      );
    }
  }

  return (
    <section className="section cardslider">
      {slides}
      <div className="slider__holder">{sliderItems}</div>
    </section>
  );
}

export default CardSlider;
