import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import Page from '../layout/Page';

export default function ChatGPT() {
  const [messages, setMessages] = useState([
    {
      message: 'Hello, Ask me anything!',
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async message => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const accessToken = await fetchAccessToken();
      const content = await processMessageToDialogflow(message, accessToken);
      if (content) {
        const dialogflowResponse = {
          message: content,
          sender: 'Dialogflow',
        };
        setMessages(prevMessages => [...prevMessages, dialogflowResponse]);
      }
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setIsTyping(false);
    }
  };

  async function fetchAccessToken() {
    const response = await fetch('http://localhost:3001/dialogflow-token');
    const data = await response.json();
    return data.accessToken;
  }

  async function processMessageToDialogflow(message, accessToken) {
    const url = `https://dialogflow.googleapis.com/v2/projects/${
      import.meta.env.VITE_PROJECT_ID
    }/agent/sessions/${import.meta.env.VITE_SESSION_ID}:detectIntent`;

    const requestBody = {
      queryInput: {
        text: {
          text: message,
          languageCode: 'en-US',
        },
      },
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    return data.queryResult.fulfillmentText;
  }

  return (
    <Page>
      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          height: '600px',
          width: '400px',
        }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="LumiBot is typing" />
                ) : null
              }>
              {messages.map((message, i) => {
                return (
                  <Message
                    key={i}
                    model={message}
                  />
                );
              })}
            </MessageList>
            <MessageInput
              placeholder="Send a Message"
              onSend={handleSendRequest}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </Page>
  );
}
