import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";
import "./ResponsiveSlider.css";

interface Props {
  children: React.ReactNode;
}

function ResponsiveSlider({ children }: Props) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const initSlider = () => {
      if (typeof window !== "undefined") {
        var allSlideItem = $(".slider .slider-item").clone();
        if ($(".slider .slider-item").length === 0) {
          $(".slider").append(allSlideItem);
        }

        let slidesToShow = 5;
        let slidesToScroll = 5;

        if (window.innerWidth > 1250) {
          slidesToShow = 5;
          slidesToScroll = 5;
        } else if (window.innerWidth < 1250 && window.innerWidth >= 1050) {
          slidesToShow = 4;
          slidesToScroll = 4;
        } else if (window.innerWidth < 1050 && window.innerWidth >= 850) {
          slidesToShow = 3;
          slidesToScroll = 3;
        } else if (window.innerWidth < 850) {
          slidesToShow = 2;
          slidesToScroll = 2;
        }

        if ($(".slider").hasClass("slick-initialized")) {
          $(".slider").slick("unslick");
        }

        $(".slider").slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
        });
      }
    };

    initSlider();

    const handleResize = () => {
      initSlider();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div className="slider responsive">{children}</div>;
}

export default ResponsiveSlider;
