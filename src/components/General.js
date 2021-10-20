import styled from 'styled-components';

const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  @media (min-width: 768px) {
    height: 117px;
    width: 117px;
    margin-right: 2rem;
  }
  @media (min-width: 900px) {
    margin-right: 1rem;
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
      font-size: 0.8125em;
    }
    .login {
      color: #0079ff;
    }
    @media (min-width: 768px) {
      justify-content: space-evenly;
      .login {
        font-size: 1em;
      }
      .join-date {
        font-size: 0.935em;
      }
    }
  }
  @media screen and (min-width: 900px) {
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
  }
`;

const Username = styled.h2`
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 1em;
  margin: 0;
  color: ${({ theme }) => theme.usernameColor};
  @media (min-width: 768px) {
    font-size: 1.625em;
  }
`;

export const General = ({ userInfo }) => {
  const date = new Date(userInfo.created_at);
  const month = date.toLocaleString('default', { month: 'short' });
  return (
    <GeneralInfo>
      <Avatar src={userInfo.avatar_url} alt="User's avatar" />
      <div className="general-info-text">
        <Username>{userInfo.name}</Username>
        <p className="login">@{userInfo.login}</p>
        <p className="join-date">
          {`Joined ${date.getDate()} ${month} ${date.getFullYear()}`}
        </p>
      </div>
    </GeneralInfo>
  );
};
