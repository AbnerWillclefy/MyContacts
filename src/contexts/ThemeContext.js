/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    setTheme((prevState) => {
      if (prevState === 'light') {
        return 'dark';
      }

      return 'light';
    });
  }, []);

  const currentTheme = useMemo(() => theme, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
