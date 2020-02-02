import React from "react";
import Link from "../display/Link";
import styled from "styled-components";
import Burger from "../display/Burger";

function NavBar(props) {
  const NavBarWrapper = styled.div`
    grid-area: 2 / 1 / 4 / 1;
    margin: auto;
    margin-top: 0px;
    z-index: 3;
    width: 120%;
    height: 70%;
    background-color: rgba(100, 100, 100, 0);
    @media (max-width: 768px) {
      grid-area: 1 / 4 / 3 / 5;
    }
  `;

  const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 70%;
    width: 70%;
    padding-left: 0px;
    margin: auto;
    filter: drop-shadow(0vh 0vh 3vh #d4d4d47a);
    background-color: rgb(239, 246, 255);
    @media (max-width: 768px) {
      width: 90%;
      display: ${props.menuState};
    }
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
