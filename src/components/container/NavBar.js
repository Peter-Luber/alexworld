import React from "react";
import Link from "../display/Link";
import styled from "styled-components";

const NavBarWrapper = styled.div`
  grid-column: 1/1;
  grid-row: 2/4;
  filter: drop-shadow(0vh 0vh 3vh #d4d4d47a);
  background-color: rgb(239, 246, 255);
  margin-left: 2vh;
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavBarWrapper id="NavBar">
        <div id="leftBox" className="page">
          <Link changeDisplay={this.props.changeDisplay} linkName="home" />
          <Link changeDisplay={this.props.changeDisplay} linkName="portfolio" />
          <Link changeDisplay={this.props.changeDisplay} linkName="services" />
          <Link changeDisplay={this.props.changeDisplay} linkName="contact" />
          <Link changeDisplay={this.props.changeDisplay} linkName="extras" />
        </div>
      </NavBarWrapper>
    );
  }
}

export default NavBar;
