import React from "react";
import './styles/navbar.css';

class Navbar extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0
  };

  render() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/">
            React Clicky Game
          </a>
          <span className="navbar-text">
            Click any image to start!
          </span>
          <span className="navbar-text">
            Score: {this.state.currentScore} | Top Score: {this.state.topScore}
          </span>
        </nav>
    );
  }
}

export default Navbar;