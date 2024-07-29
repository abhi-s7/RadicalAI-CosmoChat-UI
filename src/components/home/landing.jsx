import React, { useContext } from 'react';
import ChatComponent from '../Chat/ChatComponent';
import { ChatContext } from '../../context/ChatContext';
import './landing.css';

const LandingPage = () => {
  const { sessions, currentSessionId, startNewSession, endSession, setCurrentSessionId } = useContext(ChatContext);

  return (
    <div className="landing-page">
      <div className="welcome-section">
        <h1>Welcome to Our Chat App</h1>
        {!currentSessionId && (
          <button className="start-chat-button" onClick={startNewSession}>
            Start Chat
          </button>
        )}
        {currentSessionId && (
          <button className="end-chat-button" onClick={endSession}>
            End Chat
          </button>
        )}
      </div>
      {currentSessionId && (
        <div className="chat-section">
          <ChatComponent />
        </div>
      )}
      <div className="sessions-list">
        <h2>Previous Sessions</h2>
        <ul>
          {sessions
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(session => (
              <li key={session.id}>
                <button onClick={() => setCurrentSessionId(session.id)}>
                  {new Date(session.date).toLocaleString()}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
