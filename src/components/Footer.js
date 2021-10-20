import styled from 'styled-components';
import { ReactComponent as MapPin } from '../images/icon-location.svg';
import { ReactComponent as Website } from '../images/icon-website.svg';
import { ReactComponent as Twitter } from '../images/icon-twitter.svg';
import { ReactComponent as Company } from '../images/icon-company.svg';

const FooterContainer = styled.footer`
  display: grid;
  grid-area: footer;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 1em 1em;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    gap: 1em 2em;
  }
`;

const FooterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8125em;
  row-gap: 1em;
  svg path {
    fill: ${({ theme }) => theme.footerImgColor};
  }
  svg {
    opacity: ${(props) => (!props.opaque ? '0.5' : '1')};
  }
`;

const FooterInfoText = styled.p`
  opacity: ${(props) => (!props.opaque ? '0.5' : '1')};
  font-size: 0.8125em;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 0.9375em;
  }
`;

export const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterInfoContainer opaque={props.userInfo.location}>
        <MapPin alt="Map-pin icon" opaque={props.userInfo.location} />
        <FooterInfoText opaque={props.userInfo.location}>
          {props.userInfo.location ? props.userInfo.location : 'Not available'}
        </FooterInfoText>
      </FooterInfoContainer>

      <FooterInfoContainer opaque={props.userInfo.blog}>
        <Website alt="Link icon" />
        <FooterInfoText opaque={props.userInfo.blog}>
          {props.userInfo.blog ? props.userInfo.blog : 'Not available'}
        </FooterInfoText>
      </FooterInfoContainer>

      <FooterInfoContainer opaque={props.userInfo.twitter_username}>
        <Twitter alt="Twitter icon" />
        <FooterInfoText opaque={props.userInfo.twitter_username}>
          {props.userInfo.twitter_username
            ? props.userInfo.twitter_username
            : 'Not available'}
        </FooterInfoText>
      </FooterInfoContainer>

      <FooterInfoContainer opaque={props.userInfo.company}>
        <Company alt="Company icon" />
        <FooterInfoText opaque={props.userInfo.company}>
          {props.userInfo.company ? props.userInfo.company : 'Not available'}
        </FooterInfoText>
      </FooterInfoContainer>
    </FooterContainer>
  );
};
