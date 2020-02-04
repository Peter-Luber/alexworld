import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  margin-left: 48px;
  margin-top: 30px;
  width: 100px;
  font-size: 0.9rem;
  font-family: "EurostileBlack";
  color: rgba(206, 206, 206, 0.555);
  line-height: 10px;
  grid-area: 1 / 1 / 2 / 2;
`;

const HBox = styled.div`
  text-align: left;
  outline: none;
  transition: 1s;

  @media (max-width: 768px) {
    margin-left: 0px;
  }

  &:hover,
  &:active,
  &:focus {
    color: rgba(212, 212, 212, 0.363);
    filter: blur(0.2rem);
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
