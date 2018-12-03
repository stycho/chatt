import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MessageContainer from './components/MessageContainer';
import ChatBar from './components/ChatBar';

class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'user',
      userInput: '',
      userList: [],
      messages:[],
      loading: true,
    }
  }

  render() {
    return (
      <div>
        <Header />
        <MessageContainer />
        <ChatBar />
      </div>
    );
  }
}

export default ChatApp;
