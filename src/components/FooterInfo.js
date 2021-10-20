import styled from 'styled-components';

const FooterInfoText = styled.p`
  font-size: 0.8125em;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 0.9375em;
  }
`;

export const FooterInfo = (props) => {
  return (
    <FooterInfoText>{props.data ? props.data : 'Not available'}</FooterInfoText>
  );
};
