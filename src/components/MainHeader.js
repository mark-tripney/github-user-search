import styled from 'styled-components';
import { ReactComponent as Moon } from '../images/icon-moon.svg';
import { ReactComponent as Sun } from '../images/icon-sun.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  p,
  h1 {
    margin: 0;
  }
  h1 {
    color: ${({ theme }) => theme.headingH1};
    font-size: 1.625em;
    font-weight: 900;
  }
  @media (min-width: 768px) {
    margin: 2rem 0 1rem;
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
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-size: 0.8125em;
    font-weight: 700;
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
