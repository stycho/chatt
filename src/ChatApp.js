import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MessageContainer from './components/MessageContainer';
import ChatBar from './components/ChatBar';

// WebSocket server
const wsServer = 'ws://192.168.0.12:3001';

class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Unknown',
      id: '',
      userMessage: '',
      userList: [],
      messages:[],
      loading: true,
      webSocket: new WebSocket(wsServer), // Connect to WebSocket server
    }
  }

  // Input handlers
  handleMessageInput = (e) => {
    this.setState({
      userMessage: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { webSocket } = this.state;
    const username = e.target.elements['username'].value
    const message = e.target.elements['message'].value

    // If name changed since last message, send alert
    if (username !== this.state.username) {
      const alert = {
        type: 'alert',
        message: `${this.state.username} has changed their name to ${username}`
      }
      webSocket.send(JSON.stringify(alert));
    }

    // Set new username and clear message input state
    this.setState({
      username,
      userMessage: ''
    });

    // Send message to server
    const messageObj = {
      type: 'message',
      username,
      message,
    };
    webSocket.send(JSON.stringify(messageObj));
  }

  // 
  handleInMessage(message) {
    const inMessage = JSON.parse(message);

    switch (inMessage.type) {
      case 'assignId':
        this.setState({
          id: inMessage.id
        });
        break;
      case 'message':
        this.setState({
          messages: this.state.messages.concat(inMessage)
        })
        break;
      case 'alert':
        this.setState({
          messages: this.state.messages.concat(inMessage)
        });
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    // Interacting with WebSocket server
    const { webSocket, username } = this.state;

    webSocket.onopen = () => {
      const alert = {
        type: 'alert',
        message: `${username} has entered the chat room.`
      }
      webSocket.send(JSON.stringify(alert));
    }
    // Fire event when message is received 
    webSocket.onmessage = (event) => {
      this.handleInMessage(event.data);
    }
  }

  render() {
    const { userName, userMessage, messages } = this.state;

    return (
      <div className="app-container">
        <Header />
        <MessageContainer messages={messages} />
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
