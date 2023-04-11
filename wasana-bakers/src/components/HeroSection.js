import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Offer from "./assets/Offer.jpg";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const handleSlideChange = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      style={{
        height: "100%",
        backgroundColor: "#FFF2BD",
      }}
      activeIndex={index}
      onSelect={handleSlideChange}
      variant="dark"
      fade
    >
      <Carousel.Item interval={5000}>
        <img
          alt="Promotion Slide 1"
          src={Offer}
          width="60%"
          height="30%"
          style={{ borderRadius: "16px", margin: "32px auto 32px auto" }}
        />
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <img
          alt="Promotion Slide 2"
          src={Offer}
          width="60%"
          height="30%"
          style={{ borderRadius: "16px", margin: "32px auto 32px auto" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
