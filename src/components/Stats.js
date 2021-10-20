import styled from 'styled-components';
import { StatUnit } from './StatUnit';

const StatsContainer = styled.div`
  grid-area: stats;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 1rem 2rem;
  margin: 1rem 0 2rem;
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const UserStats = (props) => {
  return (
    <StatsContainer>
      <StatUnit title="Repos" data={props.userInfo.public_repos} />
      <StatUnit title="Followers" data={props.userInfo.followers} />
      <StatUnit title="Following" data={props.userInfo.following} />
    </StatsContainer>
  );
};
