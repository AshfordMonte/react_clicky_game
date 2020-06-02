import React from "react";
import "./styles/header.css";

class Header extends React.Component {

  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-secondary">
        <div className="container">
          <h1 className="display-1 text-white center">Clicky Game!</h1>
          <p className="lead text-white center">Click on an image to earn points, if you click any image
          more than once, you lose!</p>
        </div>
      </div>
    );
  }
}

export default Header;