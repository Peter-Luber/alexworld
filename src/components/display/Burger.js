import React from "react";
import styled from "styled-components";
import BurgerSrc from "../../img/burger.svg";

const BurgerBox = styled.div`
  display: flex;
  margin-right: 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: rgba(235, 235, 235, 0);
`;

const BurgerImg = styled.img`
  opacity: 20%;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    filter: blur(0.2vh);
  }
`;

class Burger extends React.Component {
  render() {
    return (
      <BurgerBox>
        <BurgerImg
          src={BurgerSrc}
          alt="burger"
          width="50vh"
          height="50vh"
          tabIndex="0"
          onClick={() => this.props.toggleMenu()}
        />
      </BurgerBox>
    );
  }
}

export default Burger;
