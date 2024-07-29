import React, { useContext, useState } from 'react';
import './ChatComponent.css';
import { getOpenAIResponse } from '../../api/openaiService';
import { ChatContext } from '../../context/ChatContext';

const ChatComponent = () => {
  const { messages, updateMessages } = useContext(ChatContext);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const newMessages = [...messages, { text: inputMessage, type: 'outgoing' }];
      updateMessages(newMessages);
      setInputMessage('');

      const response = await getOpenAIResponse(inputMessage);
      updateMessages([...newMessages, { text: response, type: 'incoming' }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
