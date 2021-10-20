import React from 'react';
import styled from 'styled-components';
import { Bio } from './Bio';
import { Footer } from './Footer';
import { General } from './General';
import { UserStats } from './Stats';

const MainContainer = styled.main`
  background: ${({ theme }) => theme.sectionBackground};
  border-radius: 15px;
  padding: 2rem 1.5rem 0;
  box-shadow: ${({ theme }) => theme.shadow};
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 70px 1fr;
  grid-template-areas:
    'general general'
    'bio bio'
    'stats stats'
    'footer footer';
  @media (min-width: 768px) {
    padding: 2.5rem 2.5rem 0;
    column-gap: 2rem;
  }
  @media (min-width: 900px) {
    grid-template-columns: 117px 1fr;
    grid-template-areas:
      'general general'
      '. bio'
      '. stats'
      '. footer';
  }
`;

export const Main = ({ userInfo }) => {
  return (
    <MainContainer>
      <General userInfo={userInfo} />
      <Bio bio={userInfo.bio} />
      <UserStats userInfo={userInfo} />
      <Footer userInfo={userInfo} />
    </MainContainer>
  );
};
