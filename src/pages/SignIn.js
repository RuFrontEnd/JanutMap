import React from "react";
import styled from "styled-components/macro";
import { placeholderColor } from "variable/variable";
import logo from "assets/logo.svg";
import GoolgeLogo from "assets/google-logo.svg";
import Background from "layouts/Background";
import FullScreen from "layouts/FullScreen";
import JauntButton from "components/JauntButton";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 205px;
  height: 135px;
  margin-bottom: 130px;
`;

const SignIn = () => {
  return (
    <FullScreen>
      <Background>
        <Container>
          <Logo src={logo}></Logo>
          <JauntButton
            icon={GoolgeLogo}
            text={"Google 登入"}
            width={"385px"}
            height={"60px"}
            margin={"0px 0px 24px 0px"}
            sharpRadius={false}
          />
          <JauntButton
            text={"訪客登入"}
            width={"385px"}
            height={"60px"}
            sharpRadius={false}
            textColour={placeholderColor}
          />
        </Container>
      </Background>
    </FullScreen>
  );
};

export default SignIn;
