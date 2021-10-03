import React, { useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { withRouter } from "react-router-dom";
import lottie from "lottie-web";
import { placeholderColor, notoSans } from "variable/variable";
import Background from "layouts/Background";
import FullScreen from "layouts/FullScreen";
import JauntButton from "components/JauntButton";
import mapAnimation from "assets/map_animation.json";

const Lottie = styled.div`
  width: 180px;
  height: 180px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hint = styled.p`
  color: ${placeholderColor};
  font-family: ${notoSans};
  font-size: 18px;
  margin-bottom: 90px;
  max-width: 252px;
  line-height: 27px;
  text-align: center;
  opacity: 0.6;
`;

const getLocationButtonStyle = {
  width: "385px",
  height: "60px",
  marginBottom: "24px",
};

const GPSPostion = (props) => {
  const { history } = props;
  const $Lottie = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: $Lottie.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: mapAnimation,
    });
  }, []);

  return (
    <FullScreen>
      <Background>
        <Container>
          <Lottie ref={$Lottie} />
          <Hint> 請開啟定位，才能使用小旅行， 享有完整的使用體驗</Hint>
          <JauntButton
            text={"開啟定位"}
            style={getLocationButtonStyle}
            sharpRadius={false}
            textColour={placeholderColor}
            // onClick={}
          />
        </Container>
      </Background>
    </FullScreen>
  );
};

export default withRouter(GPSPostion);
