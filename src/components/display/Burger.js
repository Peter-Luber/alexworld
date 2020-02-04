import React from "react";
import styled from "styled-components";
import BurgerSrc from "../../img/burger.svg";

const BurgerBox = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  background-color: rgba(235, 235, 235, 0);

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerImg = styled.img`
  opacity: 20%;
  outline: none;
  width: 48px;
  height: 48px;

  &:hover,
  &:active,
  &:focus {
    filter: blur(0.2rem);
  }
`;

class Burger extends React.Component {
  render() {
    return (
      <BurgerBox>
        <BurgerImg
          src={BurgerSrc}
          alt="burger"
          tabIndex="0"
          onClick={() => this.props.toggleMenu()}
        />
      </BurgerBox>
    );
  }
}

export default Burger;
