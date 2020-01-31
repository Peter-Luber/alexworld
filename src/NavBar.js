import React from "react";
import Link from "./Link"

class NavBar extends React.Component {
  render(props) {
    return (
      <div id="NavBar">
        <span>butt</span>
        <div id="leftBox">
          <span>hole</span>
          <Link changeDisplay={this.props.changeDisplay} linkName="Home"/>
          <Link changeDisplay={this.props.changeDisplay} linkName="Contact"/>
        </div>
      </div>
    );
  }
}

export default NavBar;
