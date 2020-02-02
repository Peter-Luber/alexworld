import React from "react";
import styled from "styled-components";
import BurgerSrc from "../../img/burger.svg";

const BurgerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: rgba(235, 235, 235, 0);
`;

const BurgerImg = styled.img`
  opacity: 20%;
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
          setMenu={this.props.setMenu}
          onClick={console.log('sup')}
        />
      </BurgerBox>
    );
  }
}

export default Burger 