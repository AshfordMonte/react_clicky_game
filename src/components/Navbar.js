import React from "react";

class Navbar extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0
  };

  render() {
    return (
        <nav className="navbar navbar-dark bg-secondary">
          <a class="navbar-brand" href="/">
            React Clicky Game
            </a>
          <span class="navbar-text">
            Click any image to start!
          </span>
          <span class="navbar-text">
            Score: {this.state.currentScore} | Top Score: {this.state.topScore}
          </span>
        </nav>
    );
  }
}

export default Navbar;