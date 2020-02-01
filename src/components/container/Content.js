import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-area: 2 / 2 / 4 / 6;
  background-color: rgb(239, 246, 255);
  font-size: 10vh;
  text-align: center;
  filter: drop-shadow(0vh 0vh 3vh #d4d4d47a);
  margin-left: 2vh;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;

  &:focus, &:active {
    filter: blur(0.2vh);
    color: rgba(221, 221, 221, 0.808);
    outline: none;
  };
`;

class Content extends React.Component {
  render() {
    return (
      <ContentWrapper id="Content">
        <ContentBox id="contentBox" tabIndex="0">
          {this.props.displaySwitch()}
        </ContentBox>
      </ContentWrapper>
    );
  }
}

export default Content;
