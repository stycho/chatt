import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MessageContainer from './components/MessageContainer';
import ChatBar from './components/ChatBar';

const wsServer = 'ws://192.168.0.12:3001';

class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'user1',
      userMessage: '',
      userList: [],
      messages:[],
      loading: true,
      webSocket: new WebSocket(wsServer),
      wsConnected: false
    }
  }

  handleNameInput = (e) => {
    this.setState({
      userName: e.target.value
    });
  }

  handleMessageInput = (e) => {
    this.setState({
      userMessage: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    const { webSocket } = this.state;
    webSocket.onopen = (event) => {
      this.setState({ wsConnected: true });
      webSocket.send('WS open and this is a message!');
    }
    
  }


  render() {
    const { userName, userMessage } = this.state;

    return (
      <div className="app-container">
        <Header />
        <MessageContainer />
        <ChatBar 
          userName={userName}
          userMessage={userMessage}
          handleNameInput={this.handleNameInput}
          handleMessageInput={this.handleMessageInput}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default ChatApp;
