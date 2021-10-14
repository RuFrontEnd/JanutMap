import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Subtract } from "assets/subtract.svg";
import {
  shadowColor,
  lightReceivingColor,
  optionButtonColor,
  blueGreen,
} from "variable/variable";

const ActivityCard = () => {
  return (
    <Container>
      <Wrap>
        <Image src="https://www.sunmoonlake.gov.tw/image/1523/640x480" />
        <Text>永恆慕夏-線條的魔術</Text>
        <Price>$280</Price>
        <Location>
          <Icon />
          <Place>中正區</Place>
          <Distance>1.1km</Distance>
        </Location>
      </Wrap>
    </Container>
  );
};

export default ActivityCard;

const Container = styled.section`
  max-width: 138px;
  box-sizing: border-box;
  padding: 9px;
  box-shadow: 0px 2px 8px 0px ${shadowColor},
    -3px -2px 2px 0px ${lightReceivingColor};
  border-radius: 6px;
`;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 120px;
  height: 90px;
  object-fit: cover;
  margin-bottom: 4px;
`;

const Text = styled.div`
  font-size: 14px;
  color: ${optionButtonColor};
  line-height: 21px;
`;

const Price = styled.div`
  color: ${blueGreen};
  align-self: flex-end;
  margin-bottom: 4px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  box-shadow: 0px 2px 8px 0px ${shadowColor},
    -3px -2px 2px 0px ${lightReceivingColor};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Icon = styled(Subtract)`
  margin-right: 5px;
`;

const Place = styled.div`
  color: ${optionButtonColor};
  font-size: 12px;
  line-height: 12px;
`;

const Distance = styled(Place)``;
