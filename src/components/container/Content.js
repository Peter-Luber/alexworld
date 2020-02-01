import React from "react";

class Content extends React.Component {
  render(props) {
    return (
      <div id="Content">
        <div id="contentBox" tabIndex="0">
          {this.props.displaySwitch()}
        </div>
      </div>
    );
  }
}

export default Content;
