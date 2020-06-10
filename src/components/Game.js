import React from "react";
import "./styles/game.css"
import image1 from "./images/puppy1.jpg";
import image2 from "./images/puppy2.jpg";
import image3 from "./images/puppy3.jpg";
import image4 from "./images/puppy4.jpg";
import image5 from "./images/puppy5.jpg";
import image6 from "./images/puppy6.jpg";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class Game extends React.Component {
  state = {
    images: [image1, image2, image3, image4, image5, image6]
  }
  
  handleClick = (e) => {
    this.setState({images: shuffleArray(this.state.images)})
  }

  render () {
    return (
      <div className="container">
        {
          this.state.images.map((src, i) => {
            return <img onClick={this.handleClick} className="click-item" alt="A cute puppy!" src={src} key={i}></img>;
          })
        }
      </div>
    );
  }
}

export default Game;