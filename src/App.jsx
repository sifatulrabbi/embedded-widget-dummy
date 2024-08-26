import React from "react";

const ChatMessage = ({ sender, message }) => {
  const isUser = sender === "User 1";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2.5`}>
      <div
        className={`${
          isUser ? "bg-blue-500 text-white" : "bg-slate-300 text-black"
        } px-4 py-2.5 rounded-xl max-w-[60%] break-words`}
      >
        <strong>{sender}:</strong> {message}
      </div>
    </div>
  );
};

const ChatInput = () => {
  return (
    <div className="flex items-center p-3 border-t border-base-300 bg-base-100">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow p-2.5 bg-base-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-textBase placeholder-textMuted"
      />
      <button className="ml-3 px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-primary">
        Send
      </button>
    </div>
  );
};

const ChatComponent = () => {
  const messages = [
    { sender: "User 1", message: "Hello, how are you?" },
    {
      sender: "Bot",
      message: "I am good, thank you! How can I assist you today?",
    },
    { sender: "User 1", message: "Can you tell me more about your services?" },
    {
      sender: "Bot",
      message: "Sure! We offer a variety of services tailored to your needs.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {messages.map((msg, index) => (
        <ChatMessage key={index} sender={msg.sender} message={msg.message} />
      ))}
      <ChatInput />
    </div>
  );
};

export default function App() {
  const q = window.location.search;
  const params = new URLSearchParams(q);
  const widgetTitle = params.get("widgettitle");
  const tambiId = params.get("tambiid");
  const tambiKey = params.get("tambikey");

  if (!tambiId || !tambiKey) {
    return (
      <p>
        Please provide your <strong>tambi ID</strong> and{" "}
        <strong>tambi Key</strong> to instantiate the widget!
      </p>
    );
  }

  return (
    <main className="w-full flex flex-col bg-slate-100 p-6 gap-6">
      <h1 className="text-lg font-bold pb-4 border-b border-base-300">
        {widgetTitle}
        <br />
        <span className="text-base font-normal">
          Tambi ID = {tambiId}
          <br />
          Tambi key = {tambiKey}
        </span>
      </h1>

      <ChatComponent />
    </main>
  );
}
