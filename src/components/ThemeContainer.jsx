import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

function ThemeContainer() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'Dark' : 'Light');
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default ThemeContainer;