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

  @media (min-width: 1200px) {
    width: 1000px;
    height: 500px;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 74%;
    height: 70%;
  }

  @media (min-width: 830px) and (max-width: 1024px) {
    width: 74%;
    height: 70%;
    margin-left: 200px;
  }

  @media (min-width: 768px) and (max-width: 830px) {
    width: 70%;
    height: 70%;
    margin-left: 200px;
  }

  @media (min-width: 425px) and (max-width: 768px) {
    grid-area: 1 / 1 / 4 / 6;
    margin: auto;
    margin-top: 112px;
    width: 90%;
    height: 70%;
  }

  @media (max-width: 425px) {
    margin: auto;
    margin-top: 112px;
    width: 90%;
    height: 70%;
  }

  @media (max-height: 400px) and (max-width: 830px) {
    grid-area: 1 / 1 / 4 / 6;
    width: 90%;
    height: 180px;
    margin-: auto;
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
