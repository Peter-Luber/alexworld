import React from "react";
import styled from "styled-components";

const HBox = styled.div`
  margin: auto;
  text-align: left;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    color: rgba(212, 212, 212, 0.363);
    filter: blur(0.2vh);
  }
`;

const HeaderWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
  font-size: 3.5vh;
  font-family: "EurostileBlack";
  color: rgba(206, 206, 206, 0.555);
  border-radius: 15vh;
  line-height: 50%;
  display: flex;
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
