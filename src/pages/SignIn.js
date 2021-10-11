import React, { useState } from "react";
import styled from "styled-components/macro";
import { withRouter } from "react-router-dom";
import { placeholderColor } from "variable/variable";
import logo from "assets/logo.svg";
import GoolgeLogo from "assets/google-logo.svg";
import Background from "layouts/Background";
import FullScreen from "layouts/FullScreen";
import JauntButton from "components/JauntButton";
import { GoogleLogin } from "react-google-login";

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

const responseGoogle = (response) => {
  console.log("response", response);
};

const SignIn = (props) => {
  const { history } = props;
  
  return (
    <FullScreen>
      <Background>
        <Container>
          <Logo src={logo}></Logo>
          <GoogleLogin
            clientId="402772561326-jtrfrc8doklkfoikli9h25gbmdaaf4ff.apps.googleusercontent.com"
            render={(renderProps) => (
              <>
                <JauntButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  icon={GoolgeLogo}
                  text={"Google 登入"}
                  style={googleSignInButtonStyle}
                  sharpRadius={false}
                />
              </>
            )}
            buttonText="Login"
            onSuccess={() => {
              history.push("/gpsPostion");
            }}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
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
