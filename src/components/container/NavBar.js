import React from "react";
import Link from "../display/Link";
import styled from "styled-components";
import Burger from "../display/Burger";

function NavBar(props) {
  const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-area: 1 / 1 / 3 / 1;
    align-items: start;
    background-color: rgba(100, 100, 100, 0.02);
    border-radius: 12px;
    z-index: 3;
    padding: 5px;
    height: 200px;

    @media (min-width: 768px) {
      margin-top: 112px;
      margin-left: 32px;
      height: 200px;
      width: 130px;
    }

    @media (max-width: 768px) {
      grid-area: 1 / 4 / 1 / 6;
      justify-content: space-around;
      align-items: center;
      margin: auto;
      margin-top: 40px;
      width: 130px;
      height: 40px;
      height: ${props.height};
    }
  `;

  const LeftBox = styled.div`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    filter: drop-shadow(0rem 0rem 3rem #d4d4d47a);
    background-color: rgba(239, 246, 255, 0.8);
    border-radius: 12px;

    @media (min-width: 768px) {
      width: 130px;
      height: 200px;
    }

    @media (max-width: 768px) {
      display: ${props.menuState};
      width: 120px;
      height: 200px;
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
