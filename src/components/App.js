import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../style/theme';
import { Main } from './Main';
import { MainHeader } from './MainHeader';
import { Search } from './SearchBar';

export const App = () => {
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [userFound, setUserFound] = useState(true);
  const isDarkTheme = theme === 'dark';

  useEffect(() => {
    // Populate Octocat data on app load
    fetch(`https://api.github.com/users/octocat`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme && ['dark', 'light'].includes(storedTheme)) {
      setTheme(storedTheme);
    } else if (prefersDarkTheme) {
      setTheme('dark');
    }
  }, []);

  // Handle user's search field input
  const handleInputChange = (e) => {
    setUsername(e.target.value);
    // TODO: Optimise this! Set userFound once, on first input change.
    setUserFound(true);
  };

  // Look for data when Search btn is clicked
  const handleSearchBtn = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setUserInfo(data);
        setUserFound(true);
      })
      .catch((error) => {
        setUserFound(false);
      });
  };

  // Light/dark theme toggle
  const handleToggleTheme = () => {
    const currentTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="container">
        <MainHeader theme={theme} onViewModeClick={handleToggleTheme} />
        <Search
          onInputEntry={handleInputChange}
          onSearchClick={handleSearchBtn}
          name={userInfo.name}
          userFound={userFound}
        />
        <Main userInfo={userInfo} />
      </div>
      <footer className="page-footer">
        <p>
          Coded by{' '}
          <a href="https://marktripney.com" target="_blank" rel="noreferrer">
            Mark Tripney
          </a>
          .
          <br />
          Based on a design by{' '}
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          .
        </p>
      </footer>
    </ThemeProvider>
  );
};
