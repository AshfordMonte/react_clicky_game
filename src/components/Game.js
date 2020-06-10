import React from "react";
import "./styles/game.css"
import image1 from "./images/puppy1.jpg";
import image2 from "./images/puppy2.jpg";
import image3 from "./images/puppy3.jpg";
import image4 from "./images/puppy4.jpg";
import image5 from "./images/puppy5.jpg";
import image6 from "./images/puppy6.jpg";

class Game extends React.Component {
  state = {
    images: [image1, image2, image3, image4, image5, image6]
  }

  render () {
    return (
      <div className="container">
        {
          this.state.images.map((src, i) => {
            return <img className="click-item" alt="A cute puppy!" src={src} key={i}></img>;
          })
        }
      </div>
    );
  }
}

export default Game;