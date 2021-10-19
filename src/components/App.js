import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../style/theme';
import { Main } from './Main';
import { MainHeader } from './MainHeader';
import { Search } from './SearchBar';

// const Main = styled.main`
//   background: ${({ theme }) => theme.body};
//   border-radius: 15px;
//   padding: 1.5rem;
//   box-shadow: ${({ theme }) => theme.shadow};
//   @media (min-width: 768px) {
//     padding: 2.5rem;
//   }
// `;

export const App = () => {
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [userFound, setUserFound] = useState(true);
  const isDarkTheme = theme === 'dark';

  // Handle user's search field input
  const handleInputChange = (e) => {
    setUsername(e.target.value);
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
        console.log('User not found');
        setUserFound(false);
      });
  };

  // Light/dark theme toggle
  const handleToggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

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
    </ThemeProvider>
  );
};
