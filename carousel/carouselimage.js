export let CarouselImage = props => {
  return React.createElement("img", {
    src: props.src,
    alt: props.alt,
    className: props.className
  });
};