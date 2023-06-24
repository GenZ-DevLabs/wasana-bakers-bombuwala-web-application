import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import Slider from "../helper/Slider.json";

function Slideshow(props) {
  return (
    <Carousel
      sx={{
        margin: "0px",
      }}
    >
      {Slider.map((item, i) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Slideshow;
