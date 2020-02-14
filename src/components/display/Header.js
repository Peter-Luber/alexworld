import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  margin-left: 47px;
  margin-top: 30px;
  width: 100px;
  font-size: 0.9rem;
  font-family: "EurostileBlack";
  background-color: rgba(255, 255, 255, 0);
  color: rgba(206, 206, 206, 0.555);
  line-height: 10px;
  grid-area: 1 / 1 / 2 / 2;

  @media (max-width: 768px) {
    margin-left: 30%;
  }
`;

const HBox = styled.div`
  text-align: left;
  outline: none;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  z-index: 9;
  overflow: visible;
  padding: 0.2rem;

  @media (max-width: 768px) {
    margin-left: 0px;
  }

  &:hover,
  &:active,
  &:focus {
    color: rgba(212, 212, 212, 1);
    filter: blur(0.15rem);
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
