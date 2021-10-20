import styled from 'styled-components';
import { FooterInfo } from './FooterInfo';
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
    div:nth-child(2) {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    div:nth-child(3) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
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
  opacity: ${(props) => (!props.opaque ? '0.5' : '1')};
  svg path {
    fill: ${({ theme }) => theme.footerImgColor};
  }
`;

export const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterInfoContainer opaque={props.userInfo.location}>
        <MapPin alt="Map-pin icon" />
        <FooterInfo data={props.userInfo.location} />
      </FooterInfoContainer>
      <FooterInfoContainer opaque={props.userInfo.blog}>
        <Website alt="Wesbite icon (a linked chain)" />
        <FooterInfo data={props.userInfo.blog} isLink />
      </FooterInfoContainer>
      <FooterInfoContainer opaque={props.userInfo.twitter_username}>
        <Twitter alt="Twitter logo" />
        <FooterInfo data={props.userInfo.twitter_username} isTwitter />
      </FooterInfoContainer>
      <FooterInfoContainer opaque={props.userInfo.company}>
        <Company alt="Company icon (an office block)" />
        <FooterInfo data={props.userInfo.company} />
      </FooterInfoContainer>
    </FooterContainer>
  );
};
