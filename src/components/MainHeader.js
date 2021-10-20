import styled from 'styled-components';
import { ReactComponent as Moon } from '../images/icon-moon.svg';
import { ReactComponent as Sun } from '../images/icon-sun.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  h1 {
    color: ${({ theme }) => theme.headingH1};
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    font-weight: 900;
  }
`;

const ViewModeContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &:hover * {
    color: ${({ theme }) => theme.viewModeHoverColor};
    fill: ${({ theme }) => theme.viewModeHoverColor};
  }
  p {
    margin-right: 0.5em;
  }
`;

export const MainHeader = (props) => {
  return (
    <Header>
      <h1>devfinder</h1>
      <ViewModeContainer
        role="button"
        onClick={props.onViewModeClick}
        tabIndex={0}
      >
        <p>{props.theme === 'light' ? 'dark' : 'light'}</p>
        {props.theme === 'light' ? (
          <Moon alt="Moon icon" />
        ) : (
          <Sun alt="Sun icon" />
        )}
      </ViewModeContainer>
    </Header>
  );
};
