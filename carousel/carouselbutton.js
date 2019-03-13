export let CarouselButton = props => {
  return React.createElement("img", {
    onClick: props.onClick,
    src: props.src,
    className: props.className
  });
};