import React from "react";
import styled from "styled-components";

const FootWrapper = styled.div`
  grid-area: 4 / 3 / 4 / 4;
  color: rgba(214, 214, 214, 0.705);
  font-size: 1.9vh;
  text-align: left;
  text-align: center;
  width: 100%;
`;

class Footer extends React.Component {
  render() {
    return (
      <FootWrapper id="foot">
        <p id="footText">
          powered by{" "}
          <a href="http://peter.technology/" tabIndex="0">
            svengali
          </a>
        </p>
      </FootWrapper>
    );
  }
}

export default Footer;
