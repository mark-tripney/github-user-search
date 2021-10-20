import styled from 'styled-components';

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
  @media (min-width: 768px) {
    font-size: 1.375em;
  } ;
`;

export const StatUnit = (props) => {
  return (
    <StatPairing>
      <StatTitle>{props.title}</StatTitle>
      <StatData>{props.data}</StatData>
    </StatPairing>
  );
};
