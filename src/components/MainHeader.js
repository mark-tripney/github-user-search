import styled from 'styled-components';
import { ReactComponent as Moon } from '../images/icon-moon.svg';
import { ReactComponent as Sun } from '../images/icon-sun.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 1.5rem;
  @media (min-width: 768px) {
    margin-top: 4rem;
  }
  p,
  h1 {
    margin: 0;
  }
  h1 {
    color: ${({ theme }) => theme.headingH1};
    font-size: 1.625em;
    font-weight: 900;
  }
`;

const ViewModeContainer = styled.div`
  display: flex;
  align-items: center;
  outline: none;
  p {
    margin-right: 0.5em;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-size: 0.8125em;
    font-weight: 700;
  }
  @media (hover: hover) {
    /* Prevent 'sticky hover' on touch devices */
    &:hover * {
      cursor: pointer;
      color: ${({ theme }) => theme.viewModeHoverColor};
      fill: ${({ theme }) => theme.viewModeHoverColor};
    }
  }
`;

export const MainHeader = (props) => {
  return (
    <Header>
      <h1>devfinder</h1>
      <ViewModeContainer
        className="viewmode-div"
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
