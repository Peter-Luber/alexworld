import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="foot">
        <p id="footText">
          powered by{" "}
          <a href="http://peter.technology/" tabIndex="0">
            svengali
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
