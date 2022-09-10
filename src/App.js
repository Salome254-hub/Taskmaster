import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import EditTask from './components/EditTask';
import Task from './components/Task';
import NewTask from './components/NewTask';
import Search from './components/Search';
import TaskList from './components/TaskList'

const testUser = { username: "Sally" };

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/messages")
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
  return (
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;
