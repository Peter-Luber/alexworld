import React from "react";
import styled from "styled-components";

const HBox = styled.div`
  margin: auto;
  text-align: left;
  outline: none;
  @media (max-width: 768px) {
    margin-left: 0px;
  }

  &:hover,
  &:active,
  &:focus {
    color: rgba(212, 212, 212, 0.363);
    filter: blur(0.2vh);
  }
`;

const HeaderWrapper = styled.div`
  margin-left: 4vh;
  width: 100%;
  height: 100%;
  font-size: 3.5vh;
  font-family: "EurostileBlack";
  color: rgba(206, 206, 206, 0.555);
  line-height: 50%;
  display: flex;
  grid-area: 1/1/2/2;
  @media (max-width: 768px) {
    grid-area: 1/2/2/4;
    font-size: 2.5vh;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper className="App-header">
        <HBox className="hBox" tabIndex="0">
          <h1 className="header-at">a.t.</h1>
          <h1 className="header-audio">audio</h1>
        </HBox>
      </HeaderWrapper>
    );
  }
}

export default Header;
