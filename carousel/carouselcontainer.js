import { Carousel } from './carousel.js';
let srcArray = ['images/burger.jpg', 'images/meatballs.jpg', 'images/sallad.jpg', 'images/soup.jpg', 'images/sushi.jpg'];
let altArray = ['Hamburgare', 'Köttbullar', 'Sallad', 'Soppa', 'Sushi'];


// skapar en carousel med 3 synliga bilder, en bakåtknapp och en frammåtknapp. Elementens klasser används i carousel.css.
class CarouselContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      srcArray: srcArray,
      altArray: altArray
    };
    this.onClick = this.onClick.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }

  onClick() {
    let n = this.state.index;
    n++;
    this.setState({
      index: n
    });
  }

  onClickBack() {
    let n = this.state.index;
    n--;

    if (n < 0) {
      n += this.state.srcArray.length;
    }

    this.setState({
      index: n
    });
  }

  render() {
    return React.createElement(Carousel, {
      back: this.onClickBack,
      forward: this.onClick,
      index: this.state.index,
      srcArray: this.state.srcArray,
      altArray: this.state.altArray
    });
  }

}

ReactDOM.render(React.createElement(CarouselContainer, null), document.getElementById('carouselcomponent'));