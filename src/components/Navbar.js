import React from "react";

function Taskmaster({ isDarkMode, onToggleDarkMode }) {
  return (
    <header>
      <h1>Taskmaster</h1>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle-dark-mode"
          checked={isDarkMode}
          onChange={(e) => onToggleDarkMode(e.target.checked)}
        />
        <label htmlFor="toggle-dark-mode"></label>
      </div>
    </header>
  );
}

export default Taskmaster;
