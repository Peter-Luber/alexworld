import React from "react";
import Link from "../display/Link";
import styled from "styled-components";
import Burger from "../display/Burger";

const NavBarWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 1;
  margin: auto;
  padding: 2vh;
  z-index: 3;
  @media (max-width: 768px) {
    grid-area: 1 / 4 / 2 / 5;
  }
`;

const LeftBox = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: auto;
  filter: drop-shadow(0vh 0vh 3vh #d4d4d47a);
  background-color: rgba(233, 240, 250, 1);
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavBarWrapper id="NavBar">
        <Burger />
        <LeftBox id="leftBox" className="page">
          <Link changeDisplay={this.props.changeDisplay} linkName="home" />
          <Link changeDisplay={this.props.changeDisplay} linkName="portfolio" />
          <Link changeDisplay={this.props.changeDisplay} linkName="services" />
          <Link changeDisplay={this.props.changeDisplay} linkName="contact" />
          <Link changeDisplay={this.props.changeDisplay} linkName="extras" />
        </LeftBox>
      </NavBarWrapper>
    );
  }
}

export default NavBar;
