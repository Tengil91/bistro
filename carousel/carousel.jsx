import {CarouselImage} from './carouselimage.js';
import {CarouselButton} from './carouselbutton.js';

export let Carousel = (props) => {
    return(
        <div className='carouselcontainer'>
            <h1 className='carouseldescription'>{props.altArray[(props.index + 1) % props.altArray.length]}</h1>
            <CarouselImage
                src={props.srcArray[props.index % props.srcArray.length]}
                alt={props.altArray[props.index % props.srcArray.length]}
                className='carouselleftimage'
            />
            <CarouselImage
                src={props.srcArray[(props.index + 1) % props.srcArray.length]}
                alt={props.altArray[(props.index + 1) % props.srcArray.length]}
                className='carouselcenterimage'
            />
            <CarouselImage
                src={props.srcArray[(props.index + 2) % props.srcArray.length]}
                alt={props.altArray[(props.index + 2) % props.srcArray.length]}
                className='carouselrightimage'
            />
            <CarouselButton onClick={props.forward} src="carousel/images/forward.jpg" className='carouselforwardbutton' />
            <CarouselButton onClick={props.back} src="carousel/images/backward.jpg" className='carouselbackwardbutton' />
        </div>
    );
}