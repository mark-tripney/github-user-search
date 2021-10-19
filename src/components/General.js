import styled from 'styled-components';

const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  @media (min-width: 600px) {
    height: 117px;
    width: 117px;
  }
`;

const GeneralInfo = styled.div`
  display: grid;
  grid-area: general;
  column-gap: 1em;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  .general-info-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0;
    }
  }
  @media screen and (min-width: 600px) {
    .general-info-text {
      margin-top: 0.25em;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: baseline;
    }
    .login {
      order: 1;
      flex: 0 0 100%;
      margin-top: 0.25em;
    }
    /* .join-date {
      align-self: center;
    } */
  }
`;

const Username = styled.h2`
  font-weight: 700;
  font-size: 1em;
  margin: 0;
  color: ${({ theme }) => theme.usernameColor};
  @media (min-width: 600px) {
    font-size: 1.625em;
  }
`;

export const General = ({ userInfo }) => {
  return (
    <GeneralInfo>
      <Avatar src={userInfo.avatar_url} alt="User's avatar" />
      <div className="general-info-text">
        <Username>{userInfo.name}</Username>
        <p className="login">{userInfo.login}</p>
        <p className="join-date">Joined 19 Oct 2021</p>
      </div>
    </GeneralInfo>
  );
};
