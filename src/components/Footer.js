import styled from 'styled-components';
import MapPin from '../images/icon-location.svg';
import Website from '../images/icon-website.svg';
import Twitter from '../images/icon-twitter.svg';
import Company from '../images/icon-company.svg';

const FooterContainer = styled.footer`
  display: grid;
  grid-area: footer;
  grid-template-columns: 1fr;
  align-items: center;
  /* gap: 1em 1em; */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    gap: 1em 2em;
  }
`;

const FooterInfoContainer = styled.div.attrs(() => ({
  className: 'grid-item',
}))`
  display: flex;
  align-items: center;
  column-gap: 0.8125em;
`;

const FooterImg = styled.img`
  opacity: ${(props) => (!props.opaque ? '0.5' : '1')};
`;

const FooterInfoText = styled.p`
  opacity: ${(props) => (!props.opaque ? '0.5' : '1')};
  font-size: 0.8125em;
  @media (min-width: 600px) {
    font-size: 0.9375em;
  }
`;

export const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterInfoContainer>
        <FooterImg
          src={MapPin}
          alt="Map-pin icon"
          opaque={props.userInfo.location}
        />
        <FooterInfoText opaque={props.info}>
          {props.userInfo.location ? props.userInfo.location : 'Not available'}
        </FooterInfoText>
      </FooterInfoContainer>

      <FooterInfoContainer>
        <FooterImg src={Website} alt="Link icon" opaque={props.userInfo.blog} />
        <FooterInfoText opaque={props.info}>
          {props.userInfo.blog ? props.userInfo.blog : 'Not available'}
        </FooterInfoText>
      </FooterInfoContainer>

      <FooterInfoContainer>
        <FooterImg
          src={Twitter}
          alt="Twitter icon"
          opaque={props.userInfo.twitter_username}
        />
        <FooterInfoText opaque={props.info}>
          {props.userInfo.twitter_username
            ? props.userInfo.twitter_username
            : 'Not available'}
        </FooterInfoText>
      </FooterInfoContainer>

      <FooterInfoContainer>
        <FooterImg
          src={Company}
          alt="Company icon"
          opaque={props.userInfo.company}
        />
        <FooterInfoText opaque={props.info}>
          {props.userInfo.company ? props.userInfo.company : 'Not available'}
        </FooterInfoText>
      </FooterInfoContainer>
    </FooterContainer>
  );
};
