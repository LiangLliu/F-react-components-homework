import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  robotReply = (inputMessage) => {
    const defaultMessage = answersData.find((answer) => answer.tags.includes(inputMessage));

    if (defaultMessage) {
      const messages = this.state.messages.concat(defaultMessage);
      setTimeout(() => {
        this.setState({
          messages,
        });
      }, 100);
    }
  };

  changeMassage = (inputMessage) => {
    const { messages } = this.state;
    const newMessage = { text: inputMessage, role: ROLE.CUSTOMER };
    messages.push(newMessage);

    this.setState({
      messages,
    });
    this.robotReply(inputMessage);
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput onSend={this.changeMassage} />
      </main>
    );
  }
}

export default Chat;
