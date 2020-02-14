import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  grid-area: 1 / 1 / 4 / 6;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  border-width: 5px;
  border-color: rgba(250, 250, 250, 1);
  border-style: solid;
  margin-top: 112px;
  margin-left: 200px;
  margin-right: 0px;
  height: 70%;
  box-shadow: 0rem 0rem 10rem #e5e5e5;
  z-index: 5;
  overflow: visible;

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
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0);
  margin: auto;
  outline: none;
  z-index: 5;
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
