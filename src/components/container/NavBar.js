import React from "react";
import Link from "../display/Link";
import styled from "styled-components";
import Burger from "../display/Burger";

function NavBar(props) {
  const NavBarWrapper = styled.div`
    grid-area: 2 / 1 / 3 / 1;
    margin-top: 0px;
    padding: 2vh;
    z-index: 3;
    width: 100%;
    @media (max-width: 768px) {
      grid-area: 1 / 4 / 2 / 5;
    }
  `;

  const LeftBox = styled.div`
    display: ${props.menuState};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: auto;
    filter: drop-shadow(0vh 0vh 3vh #d4d4d47a);
    background-color: rgba(233, 240, 250, 0);
  `;

  return (
    <NavBarWrapper id="NavBar">
      <Burger toggleMenu={props.toggleMenu} />
      <LeftBox id="leftBox" className="page">
        <Link changeDisplay={props.changeDisplay} linkName="home" />
        <Link changeDisplay={props.changeDisplay} linkName="portfolio" />
        <Link changeDisplay={props.changeDisplay} linkName="services" />
        <Link changeDisplay={props.changeDisplay} linkName="contact" />
        <Link changeDisplay={props.changeDisplay} linkName="extras" />
      </LeftBox>
    </NavBarWrapper>
  );
}

export default NavBar;