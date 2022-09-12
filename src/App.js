import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import NewTask from './components/NewTask';
import Search from './components/Search';
import TaskList from './components/TaskList';
import './App.css';


const testUser = { username: "Sally" };

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://mastertask-backend.herokuapp.com/")
      .then((r) => r.json())
      .then((messages) => setMessages(messages));
  }, []);

  function handleAddMessage(newMessage) {
    setMessages([...messages, newMessage]);
  }

  function handleDeleteMessage(id) {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  }

  function handleUpdateMessage(updatedMessageObj) {
    const updatedMessages = messages.map((message) => {
      if (message.id === updatedMessageObj.id) {
        return updatedMessageObj;
      } else {
        return message;
      }
    });
    setMessages(updatedMessages);
  }

  const displayedMessages = messages.filter((message) =>
    message.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="App" >
    
    
    </div>
    <main className={isDarkMode ? "dark-mode" : ""}>
    
    <Navbar isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
    <Search search={search} onSearchChange={setSearch} />
    <TaskList
      messages={displayedMessages}
      currentUser={testUser}
      onMessageDelete={handleDeleteMessage}
      onUpdateMessage={handleUpdateMessage}
    />
    <NewTask currentUser={testUser} onAddMessage={handleAddMessage} />
    
  </main>
    
   
    
    </>
  );
}

export default App;