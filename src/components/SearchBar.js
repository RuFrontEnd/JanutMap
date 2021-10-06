import React from "react";
import styled from "styled-components/macro";
import search from "assets/search.svg";
import { inputShadowColor, notoSans } from "variable/variable";

const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  position: absolute;
  left: 12.5px;
`;

const Input = styled.input`
border: none;
  box-shadow: 0px 1px 4px ${inputShadowColor};
  box-sizing: border-box;
  padding: 11px 46px;
  width: 368px;
  font-size: 16px;
  line-height: 24px;
  font-family: ${notoSans};
`;

const SearchBar = () => {
  return (
    <Container>
      <Logo src={search} />
      <Input placeholder="輸入目的地、景點、活動..." />
    </Container>
  );
};

export default SearchBar;
