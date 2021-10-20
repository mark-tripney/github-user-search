import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Spyglass from '../images/icon-search.svg';

const SearchBar = styled.form`
  display: flex;
  column-gap: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.sectionBackground};
  border-radius: 15px;
  border: 1px solid #979797;
  align-items: center;
  position: relative;
  padding: 0.5rem 0.5rem 0.5rem 0;
  padding-left: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-bottom: 1rem;
  @media (min-width: 768) {
    padding-left: 1rem;
  }
`;

const Input = styled.input`
  background-color: inherit;
  border: none;
  width: 100%;
  margin-right: auto;
  font-size: 0.8125em;
  color: ${({ theme }) => theme.inputColor};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.placeHolder};
    opacity: 1;
  }
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    font-size: 1.125em;
    margin-left: 0.5rem;
  }
`;

const NoResultsMsg = styled.p`
  color: red;
  font-size: 0.8125em;
  font-weight: 700;
  margin: 0 0 0 0.25rem;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 1.125em;
  }
`;

const Button = styled.button`
  font-size: 0.875em;
  font-weight: 700;
  background-color: #0079ff;
  color: #fff;
  border: none;
  padding: 0.78125rem 1.125rem;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #60abff;
  }
  @media (min-width: 768px) {
    font-size: 1em;
    padding: 0.8125rem 1.5rem;
  }
`;

export const Search = (props) => {
  return (
    <SearchBar>
      <img src={Spyglass} alt="Spyglass icon" width={20} height={20} />
      <Input
        onChange={props.onInputEntry}
        maxLength={39}
        placeholder="Search GitHub username"
        type="text"
      />
      {!props.userFound ? <NoResultsMsg>No results</NoResultsMsg> : null}
      <Button onClick={props.onSearchClick}>Search</Button>
    </SearchBar>
  );
};
