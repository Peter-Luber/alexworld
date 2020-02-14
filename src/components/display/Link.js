import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  text-indent: 0;
  font-family: "Eurostile";
  font-size: 0.8rem;
  color: rgba(209, 209, 209, 0.808);
  background-color: rgba(239, 246, 255, 0);
  border-style: none;
  width: 100%;
  outline: none;
  cursor: crosshair;
  overflow: visible;
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  position: relative;

  &:hover,
  &:active {
    color: rgb(224, 224, 224);
    filter: blur(0.2rem);
  }
`;

class Link extends React.Component {
  render() {
    return (
      <div className="Link" id={`${this.props.linkName}`}>
        <CustomButton
          onClick={() => this.props.changeDisplay(`${this.props.linkName}`)}
        >
          {this.props.linkName}
        </CustomButton>
      </div>
    );
  }
}

export default Link;
