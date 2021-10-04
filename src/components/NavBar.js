import React from "react";
import styled from "styled-components/macro";
import { navBarColor } from "variable/variable";
import navBarLogo from "assets/navBar-logo.svg";
import Space from "layouts/Space";
import JauntCircleButton from "./JauntCircleButton";
import portrait from "assets/portrait.svg";

const Container = styled.section`
  padding: 18px 0px;
`;

const Logo = styled.img``;

const NavBarStyle = {
  backgroundColor: navBarColor,
  opacity: 0.8,
};

const NavBar = () => {
  return (
    <Space style={NavBarStyle}>
      <Container>
        <Logo src={navBarLogo}></Logo>
        <JauntCircleButton icon={portrait} />
      </Container>
    </Space>
  );
};

export default NavBar;
