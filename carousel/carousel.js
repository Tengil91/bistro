import { CarouselImage } from './carouselimage.js';
import { CarouselButton } from './carouselbutton.js';
export let Carousel = props => {
  return React.createElement("div", {
    className: "carouselcontainer"
  }, React.createElement("h1", {
    className: "carouseldescription"
  }, props.altArray[(props.index + 1) % props.altArray.length]), React.createElement(CarouselImage, {
    src: props.srcArray[props.index % props.srcArray.length],
    alt: props.altArray[props.index % props.srcArray.length],
    className: "carouselleftimage"
  }), React.createElement(CarouselImage, {
    src: props.srcArray[(props.index + 1) % props.srcArray.length],
    alt: props.altArray[(props.index + 1) % props.srcArray.length],
    className: "carouselcenterimage"
  }), React.createElement(CarouselImage, {
    src: props.srcArray[(props.index + 2) % props.srcArray.length],
    alt: props.altArray[(props.index + 2) % props.srcArray.length],
    className: "carouselrightimage"
  }), React.createElement(CarouselButton, {
    onClick: props.forward,
    src: "carousel/images/forward.jpg",
    className: "carouselforwardbutton"
  }), React.createElement(CarouselButton, {
    onClick: props.back,
    src: "carousel/images/backward.jpg",
    className: "carouselbackwardbutton"
  }));
};