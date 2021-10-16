import React from "react";
import styled from "styled-components/macro";
import {
  placeholderColor,
  optionButtonColor,
  textColor,
  notoSans,
} from "variable/variable";
import Background from "layouts/Background";
import Space from "layouts/Space";
import Layout from "layouts/Layout";
import NavBar from "components/NavBar";
import SeperateBar from "components/SeperateBar";
import JauntButton from "components/JauntButton";
import ActivityCardRef from "components/ActivityCard";

const buttonSettings = [
  { text: "全部" },
  { text: "藝文" },
  { text: "古蹟" },
  { text: "免費" },
  { text: "收費" },
];

const Attractions = () => {
  return (
    <Background>
      <NavBar />
      <SeperateBar style={SeperateBarStyle} />
      <Space>
        <Layout>
          <Container>
            <OptionButtons>
              {buttonSettings.map((buttonSetting) => (
                <Column>
                  <OptionButton
                    text={buttonSetting.text}
                    textStyle={OptionButtonTextStyle}
                  />
                </Column>
              ))}
            </OptionButtons>
            <Activities>
              <Title>人氣活動</Title>
              <ActivityCards>
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
              </ActivityCards>
            </Activities>
            <Activities>
              <Title>我的附近</Title>
              <ActivityCards>
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
              </ActivityCards>
            </Activities>
          </Container>
        </Layout>
      </Space>
    </Background>
  );
};

const Container = styled.section`
  /* display: grid; */
  /* justify-content: center; */
`;

const Wrap = styled.div`
  background-color: red;
`;

const OptionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 42px;
`;

const Column = styled.div``;

const OptionButton = styled(JauntButton)`
  padding: 7.5px 38.25px;
  line-height: 21px;
  margin: 0px 6.5px;
  /* max-width: 120px; */
`;

const ActivityCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Activities = styled.div`
  margin-bottom: 90px;
`;

const Title = styled.h1`
  color: ${textColor};
  font-family: ${notoSans};
  margin-bottom: 24px;
`;

const ActivityCard = styled(ActivityCardRef)`
  margin: 0px 8px;
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
