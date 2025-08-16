import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";


const SwiperMenu = () => {
  useEffect(() => {
    const menuButton = document.querySelector(".menu-button");
    const openMenu = () => {
      swiper.slidePrev();
    };

    const swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        slideChangeTransitionStart: function () {
          if (this.activeIndex === 0) {
            menuButton.classList.add("cross");
            menuButton.removeEventListener("click", openMenu, true);
          } else {
            menuButton.classList.remove("cross");
          }
        },
        slideChangeTransitionEnd: function () {
          if (this.activeIndex === 1) {
            menuButton.addEventListener("click", openMenu, true);
          }
        },
      },
    });

    // Cleanup on unmount
    return () => {
      menuButton.removeEventListener("click", openMenu, true);
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide menu">Menu slide</div>
        <div className="swiper-slide content">
          <div className="menu-button">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          Content slide
        </div>
      </div>
    </div>
  );
};

export default SwiperMenu;