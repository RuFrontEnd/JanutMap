import React from "react";
import styled from "styled-components/macro";
import { navBarColor } from "variable/variable";
import navBarLogo from "assets/navBar-logo.svg";
import Space from "layouts/Space";
import JauntCircleButton from "components/JauntCircleButton";
import SearchBar from "components/SearchBar";
import portrait from "assets/portrait.svg";

const NavBarStyle = {
  backgroundColor: navBarColor,
  opacity: 0.8,
};

const NavBar = () => {
  return (
    <Space style={NavBarStyle}>
      <Container>
        <Logo src={navBarLogo} />
        <Tools>
          <MemberButton icon={portrait} />
          <SearchBar />
        </Tools>
      </Container>
    </Space>
  );
};

const Container = styled.section`
  padding: 18px 0px;
  display: flex;
`;

const Logo = styled.img``;

const MemberButton = styled(JauntCircleButton)`
  margin-right: 15px;
`;

const Tools = styled.div`
  display: flex;
  align-items: center;
`;

export default NavBar;
