import styled from 'styled-components';

const BioText = styled.div`
  grid-area: bio;
  @media (min-width: 600px) {
    margin-top: -1.5em;
  }
`;

export const Bio = ({ bio }) => {
  return (
    <BioText>
      <p>{bio ? bio : 'No bio'}</p>
    </BioText>
  );
};
