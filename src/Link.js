import React from "react";

class Link extends React.Component {
  render(props) {
    return (
      <div className="Link" id={`${this.props.linkName}`}>
        <button
          onClick={() => this.props.changeDisplay(`${this.props.linkName}`)}
        >
          {this.props.linkName}
        </button>
      </div>
    );
  }
}

export default Link;
