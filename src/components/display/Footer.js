import React from "react";
import styled from "styled-components";

const FootWrapper = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1rem;
  color: rgba(214, 214, 214, 0.705);
`;

const FootText = styled.p`
  z-index: 10;
  color: black;
  background-color: lightgrey;
  border-radius: 10px;
  text-align: right;
  width: 210px;
  padding: 5px;
  opacity: 13%;
  margin-left: -130px;
  transition: 1s;
  filter: drop-shadow(0px 10px 10px #757575);

  &:hover {
    margin-left: 0px;
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
