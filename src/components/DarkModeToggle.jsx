import React from 'react'

const DarkModeToggle = ({ darkMode,setDarkMode}) => {
  // Implement dark mode toggle logic
  const toggleMode = () => setDarkMode(prev => !prev);

  return (
    // Update this button text from Dark to Light dynamically
    <button onClick={toggleMode}>
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
