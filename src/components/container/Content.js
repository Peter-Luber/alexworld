import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-area: 1 / 1 / 4 / 6;
  display: flex;
  flex-direction: column;
  text-align: center;
  filter: drop-shadow(0rem 0rem 3rem #d4d4d47a);
  background-color: rgb(239, 246, 255);
  border-radius: 12px;
  margin-top: 112px;
  margin-left: 200px;
  margin-right: 0px;
  height: 70%;

  @media (min-width: 768px) {
    width: 74%;
  }

  @media (max-width: 768px) {
    margin: auto;
    margin-top: 112px;
    width: 90%;
  }
`;

const ContentBox = styled.div`
  justify-content: center;
  align-items: center;
  padding: 5%;
  font-size: 0.75rem;
  width: 280px;
  margin: auto;

  &:focus,
  &:active {
    filter: blur(0.2rem);
    color: rgba(240, 240, 240, 0.808);
    outline: none;
  }
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
