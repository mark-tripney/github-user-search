import styled from 'styled-components';

const FooterInfoText = styled.p`
  font-size: 0.8125em;
  margin: 0;
  @media (min-width: 736px) {
    font-size: 0.9375em;
  }
`;

const FooterInfoLink = styled.a`
  font-size: 0.8125em;
  margin: 0;
  color: ${({ theme }) => theme.text};
  &:visited {
    color: ${({ theme }) => theme.text};
  }
  @media (min-width: 736px) {
    font-size: 0.9375em;
  }
`;

export const FooterInfo = (props) => {
  if (props.isLink && props.data) {
    let link = props.data;
    const prefix = 'https://';
    if (props.data.substr(0, prefix.length) !== prefix) {
      link = prefix + props.data;
    }
    return (
      <FooterInfoLink href={link} target="_blank">
        {props.data}
      </FooterInfoLink>
    );
  } else if (props.isTwitter && props.data) {
    return (
      <FooterInfoLink href={`http://twitter.com/${props.data}`} target="_blank">
        {props.data}
      </FooterInfoLink>
    );
  }
  return (
    <FooterInfoText>{props.data ? props.data : 'Not available'}</FooterInfoText>
  );
};
