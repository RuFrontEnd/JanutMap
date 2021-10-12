import React from "react";
import styled from "styled-components/macro";
import {
  placeholderColor,
  optionButtonColor,
  notoSans,
} from "variable/variable";
import FullScreen from "layouts/FullScreen";
import Background from "layouts/Background";
import NavBar from "components/NavBar";
import SeperateBar from "components/SeperateBar";
import JauntButton from "components/JauntButton";
import Space from "layouts/Space";

const buttonSettings = [
  { text: "全部" },
  { text: "藝文" },
  { text: "古蹟" },
  { text: "免費" },
  { text: "收費" },
];

const Attractions = () => {
  return (
    <FullScreen>
      <Background>
        <NavBar />
        <SeperateBar style={SeperateBarStyle} />
        <Space>
          <Container>
            <OptionButtons>
              {buttonSettings.map((buttonSetting) => (
                <OptionButton
                  text={buttonSetting.text}
                  textStyle={OptionButtonTextStyle}
                />
              ))}
            </OptionButtons>
          </Container>
        </Space>
      </Background>
    </FullScreen>
  );
};

const Container = styled.section`
  display: grid;
  justify-content: center;
`;

const Wrap = styled.div`
  background-color: red;
`;

const OptionButtons = styled.div`
`;

const OptionButton = styled(JauntButton)`
  padding: 7.5px 38.25px;
  line-height: 21px;
  margin: 0px 6.5px;
`;

const SeperateBarStyle = {
  marginBottom: "38px",
};

const OptionButtonTextStyle = {
  fontSize: "14px",
  fontFamily: `${notoSans}`,
  color: optionButtonColor,
};

export default Attractions;
