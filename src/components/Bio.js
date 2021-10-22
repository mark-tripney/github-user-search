import styled from 'styled-components';

const BioText = styled.div`
  grid-area: bio;
  font-size: 0.8125em;
  margin-bottom: 0.5em;
  p {
    margin-top: 1.5em;
  }
  @media (min-width: 736px) {
    font-size: 0.9375em;
  }
  @media (min-width: 900px) {
    margin-top: -2.5em;
  }
`;

export const Bio = ({ bio }) => {
  return (
    <BioText>
      <p>{bio ? bio : 'No bio'}</p>
    </BioText>
  );
};
