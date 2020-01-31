import React from "react";
import Link from "../display/Link"

class NavBar extends React.Component {
  render(props) {
    return (
      <div id="NavBar">
        <div id="leftBox">
          <Link changeDisplay={this.props.changeDisplay} linkName="Home"/>
          <Link changeDisplay={this.props.changeDisplay} linkName="Contact"/>
        </div>
      </div>
    );
  }
}

export default NavBar;
