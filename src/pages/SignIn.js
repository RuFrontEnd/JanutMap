import React from "react";
import styled from "styled-components/macro";
import { withRouter } from "react-router-dom";
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

const googleSignInButtonStyle = {
  width: "385px",
  height: "60px",
  marginBottom: "24px",
};

const visitorSignInButtonStyle = {
  width: "385px",
  height: "60px",
  marginBottom: "24px",
};

const visitorSignInButtonTextStyle = {
  color: placeholderColor,
};

const SignIn = (props) => {
  const { history } = props;

  return (
    <FullScreen>
      <Background>
        <Container>
          <Logo src={logo}></Logo>
          <JauntButton
            icon={GoolgeLogo}
            text={"Google 登入"}
            style={googleSignInButtonStyle}
            sharpRadius={false}
          />
          <JauntButton
            text={"訪客登入"}
            style={visitorSignInButtonStyle}
            sharpRadius={false}
            textStyle={visitorSignInButtonTextStyle}
            onClick={() => {
              history.push("/gpsPostion");
            }}
          />
        </Container>
      </Background>
    </FullScreen>
  );
};

export default withRouter(SignIn);
