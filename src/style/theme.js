import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    min-width: 375px;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    flex: 1;
    width: 95%;
    max-width: 730px;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 75%;
    }
  }

  .page-footer {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2rem 0 1rem;
    p {
      font-size: 0.6875em;
      line-height: 1.8;
    }
    a, a:visited {
      color: ${({ theme }) => theme.text};
    }
    a:hover, a:focus {
      opacity: 0.8;
    }
    @media {
      p {
        font-size: 0.8125rem;
      }
    }
  }
`;

export const lightTheme = {
  headingH1: '#000',
  body: '#f6f8ff',
  text: '#4b6a9b',
  viewModeHoverColor: '#000',
  shadow: '0 16px 30px -10px #979797',
  sectionBackground: '#fefefe',
  inputColor: '#222731',
  placeHolder: '#4b6a9b',
  usernameColor: '#2b3442',
  footerImgColor: '#4b6a9B',
  footerTextColor: '#4b6a9B',
  statDataColor: '#000',
};

export const darkTheme = {
  headingH1: '#fff',
  body: '#131d2e',
  text: '#fff',
  viewModeHoverColor: '#90a4d4',
  shadow: 'none',
  sectionBackground: '#1e2a47',
  inputColor: '#fff',
  usernameColor: '#fff',
  footerImgColor: '#fff',
  footerTextColor: '#fff',
  statDataColor: '#fff',
};
