import React from 'react';
import Navbar from './components/Navbar';
import EditTask from './components/EditTask';
import Task from './components/Task';
import NewTask from './components/NewTask';
import Search from './components/Search';
import TaskList from './components/TaskList'

const testUser = { username: "Sally" };

function App() {

  function handleAddMessage(newMessage) {
    setMessages([...messages, newMessage]);
  }
  return (
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;
