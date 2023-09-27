import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeToggleContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);
export const useToggleTheme = () => useContext(ThemeToggleContext);

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
}
