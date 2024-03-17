import React, { Component } from 'react';

class BshelfChanger extends Component {
  state = {
    value: this.props.shelf
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onMove(this.props.book, value);
  };
  
  render() {
    return (
      <div className="BshelfChanger-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="Reading">Currently Reading</option>
          <option value="want2read">Want2Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BshelfChanger;