import styled from 'styled-components';

const StatsContainer = styled.div`
  grid-area: stats;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  @media (min-width: 600px) {
    justify-content: space-evenly;
  }
`;

const StatPairing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  row-gap: 0.5rem;
  p {
    color: ${({ theme }) => theme.statDataColor};
  }
`;

const StatTitle = styled.h3`
  font-weight: 400;
  font-size: 0.6875em;
  margin: 0;
  @media (min-width: 450px) {
    font-size: 0.8125em;
  } ;
`;

const StatData = styled.p`
  font-weight: 700;
  font-size: 1em;
  margin: 0;
  @media (min-width: 600px) {
    font-size: 1.375em;
  } ;
`;

export const UserStats = (props) => {
  return (
    <StatsContainer>
      {/* <StatPairing statTitle="Repos" statData={props.userInfo.public_repos} />
      <StatPairing statTitle="Followers" statData={props.userInfo.followers} />
      <StatPairing statTitle="Following" statData={props.userInfo.following} /> */}
      <StatPairing>
        <StatTitle>Repos</StatTitle>
        <StatData>{props.userInfo.public_repos}</StatData>
      </StatPairing>
      <StatPairing>
        <StatTitle>Followers</StatTitle>
        <StatData>{props.userInfo.followers}</StatData>
      </StatPairing>
      <StatPairing>
        <StatTitle>Following</StatTitle>
        <StatData>{props.userInfo.following}</StatData>
      </StatPairing>
    </StatsContainer>
  );
};
