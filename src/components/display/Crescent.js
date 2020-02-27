import React from "react";
import styled from "styled-components";

const MoonOuter = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  position: static;
  z-index: 20;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250, 1);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  margin: auto;
  margin-top: 313px;
  margin-left: 80px;

  @media (max-width: 830px) {
    display: none;
    grid-area: 1 / 1 / 1 / 1;
    position: static;
    margin-left: 30%;
    margin-top: 20px;
    transform: translate(120px);
  }
`;

const MoonWrapper = styled.div`
  z-index: 20;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: rgba(230, 230, 230, 1);
  margin: auto;

  &:hover {
    background-color: rgba(240, 240, 240, 1);
  }
`;

const Moon = styled.div`
  z-index: 21;
  position: absolute;
  background-color: rgba(250, 250, 250, 1);
  width: 26px;
  height: 26px;
  border-radius: 26px;
  margin: auto;
  transform: translate(5px);
`;

class Footer extends React.Component {
  render() {
    return (
      <MoonOuter>
        <MoonWrapper onClick={() => this.props.moonPress()}>
          <Moon />
        </MoonWrapper>
      </MoonOuter>
    );
  }
}

export default Footer;
