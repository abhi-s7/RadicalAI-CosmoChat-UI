import React, { createContext, useState, useEffect } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [sessions, setSessions] = useState(() => {
    const savedSessions = localStorage.getItem('chatSessions');
    return savedSessions ? JSON.parse(savedSessions) : [];
  });

  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (currentSessionId) {
      const session = sessions.find(session => session.id === currentSessionId);
      setMessages(session ? session.messages : []);
    } else {
      setMessages([]);
    }
  }, [currentSessionId, sessions]);

  const startNewSession = () => {
    const newSession = {
      id: Date.now().toString(),
      date: new Date(),
      messages: [],
    };
    setSessions([...sessions, newSession]);
    setCurrentSessionId(newSession.id);
  };

  const endSession = () => {
    setCurrentSessionId(null);
  };

  const updateMessages = (newMessages) => {
    setMessages(newMessages);
    setSessions(sessions.map(session => 
      session.id === currentSessionId 
        ? { ...session, messages: newMessages }
        : session
    ));
  };

  useEffect(() => {
    localStorage.setItem('chatSessions', JSON.stringify(sessions));
  }, [sessions]);

  return (
    <ChatContext.Provider value={{ sessions, currentSessionId, messages, startNewSession, endSession, updateMessages, setCurrentSessionId }}>
      {children}
    </ChatContext.Provider>
  );
};
