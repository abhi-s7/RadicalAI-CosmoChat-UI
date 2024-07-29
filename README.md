# COSMOCHAT UI

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Overview

This project is a chat application built with React that allows users to start new chat sessions, revisit previous chat sessions, and view analytics on their chat activity. The application integrates with OpenAI's API to provide responses to user messages.

## Features

- Start and end chat sessions
- Store chat history in local storage
- Display previous chat sessions
- Interactive chat interface
- Real-time analytics dashboard

## Installation

To get started with the project, follow these steps:

- **Clone the repository:**

  ```sh
  git clone https://github.com/abhi-s7/radicalai-cosmochat-ui.git
  cd radicalai-cosmochat-ui

- **Create a .env file and add your API key:**

  ```sh
  REACT_APP_OPENAI_API_KEY=your_api_key_here
  
- **Install dependencies:**

  ```sh
  npm install
  
- **Run the application:**

  ```sh
  npm start

- **Open your browser:**
    Navigate to http://localhost:3000 to see the app in action.

## Usage

### Starting a New Chat Session

- On the landing page, click on the "Start Chat" button to begin a new chat session.
- Enter your message in the input field and press "Send" to receive a response from the OpenAI API.
- To end the session, click on the "End Chat" button.

![1](https://github.com/user-attachments/assets/f35758d8-9a11-4e23-bce1-f20c4a6489bd)

### Viewing Previous Sessions

- On the landing page, scroll to the "Previous Sessions" section.
- Click on any session to reload it and view the chat history.

![2](https://github.com/user-attachments/assets/2d954eb7-c5da-4e56-aa04-fe2c2d1c26cb)

### Viewing the Dashboard

- Navigate to the Dashboard to see visualizations of your chat activity.
- The line chart shows daily activity, and the pie chart shows the distribution of message types.

![3](https://github.com/user-attachments/assets/78ba87dc-e4c0-4cfe-9add-5b3cfd233e19)

## Components

### `index.js`

The entry point of the application. It sets up the root component and wraps it with the `ChatProvider`.

### `ChatContext.js`

Provides the context for managing chat sessions and messages. Includes state and functions to start new sessions, end sessions, and update messages.

### `LandingPage.jsx`

The landing page component where users can start new chat sessions, end current sessions, and view previous sessions.

### `ChatComponent.jsx`

The chat interface where users can send and receive messages. Integrates with OpenAI's API for responses.

### `Dashboard.jsx`

Displays real-time analytics on chat activity, including daily message counts and message type distribution using Chart.js.

