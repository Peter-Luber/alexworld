import React from "react";
import styled from "styled-components";

const FootWrapper = styled.div`
  grid-area: 1 / 1 / 5 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 0.7rem;
  color: rgba(214, 214, 214, 1);
  z-index: 3;
`;

const FootText = styled.p`
  z-index: 10;
  color: rgb(220, 220, 220);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  text-align: right;
  width: 150px;
  padding: 5px;
  margin-left: -95px;
  transition: 1s;
  filter: drop-shadow(0px 6px 6px #F0F0F0);

  &:hover {
    margin-left: -10px;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <FootWrapper id="foot">
        <FootText id="footText">
          powered by{" "}
          <a href="http://peter.technology/" tabIndex="0">
            svengali
          </a>
        </FootText>
      </FootWrapper>
    );
  }
}

export default Footer;
