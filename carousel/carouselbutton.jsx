export let CarouselButton = (props) => {
    return <img onClick={props.onClick} src={props.src} className={props.className} />;
}