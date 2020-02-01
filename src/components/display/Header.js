import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="hBox" tabIndex="0">
          <h1 className="header-at">a.t.</h1>
          <h1 className="header-audio">audio</h1>
        </div>
      </header>
    );
  }
}

export default Header;
