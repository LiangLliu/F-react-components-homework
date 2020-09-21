import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendMessage = () => {
    const { onSend } = this.props;

    onSend(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    const { message } = this.state;

    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.handleChange} value={message} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
