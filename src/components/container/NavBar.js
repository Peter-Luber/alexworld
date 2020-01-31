import React from "react";
import Link from "../display/Link"

class NavBar extends React.Component {
  render(props) {
    return (
      <div id="NavBar">
        <div id="leftBox">
          <Link changeDisplay={this.props.changeDisplay} linkName="home"/>
          <Link changeDisplay={this.props.changeDisplay} linkName="portfolio"/>
          <Link changeDisplay={this.props.changeDisplay} linkName="services"/>
          <Link changeDisplay={this.props.changeDisplay} linkName="contact"/>
          <Link changeDisplay={this.props.changeDisplay} linkName="extras"/>
        </div>
      </div>
    );
  }
}

export default NavBar;
