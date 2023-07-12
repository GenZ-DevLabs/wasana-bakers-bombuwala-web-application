import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import Slider from "../helper/Slider.json";

const Slideshow = (props) => {
  return (
    <Carousel
      sx={{
        margin: "0px",
        width: "100%",
      }}
    >
      {Slider.map((item, i) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default Slideshow;
