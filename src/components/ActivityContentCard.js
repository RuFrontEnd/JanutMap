import React from "react";
import styled from "styled-components/macro";
import ImageTmp from "assets/image_tmp.png";
import { ReactComponent as CalendarRef } from "assets/calendar.svg";
import { ReactComponent as Ticket } from "assets/ticket.svg";
import { ReactComponent as Clock } from "assets/clock.svg";
import { lightReceivingColor, shadowColor, blueGreen } from "variable/variable";
import JauntButton from "components/JauntButton";

const ActivityContentCard = (props) => {
  const { className } = props;
  return (
    <Container className={className}>
      <Image src={ImageTmp} />
      <Data>
        <Calendar />
        2021.06.12~09.21
      </Data>
      <Price>
        <Ticket />
        $350
      </Price>
      <Time>
        <Clock />
        周一~周日10:00 ~ 18:00(最後入場時間 17:30)
      </Time>
      <Location>國立中正紀念堂 1展廳 (臺北市中正區中山南路21號)</Location>
      <JauntButton text={"地圖"} />
      <Introduction>
        曾被紐約時報譽為「世界上最偉大的裝飾藝術家」的慕夏，為20世紀新藝術代表人物之一，以女性的優美姿態結合花卉植物的繾綣曲線風靡世界，獨樹一幟的「慕夏風格」更影響後世多國的平面藝術家和設計師，更有「新藝術和現代平面設計之父」的美稱。
      </Introduction>
    </Container>
  );
};

const Container = styled.section`
  /* background-color: red; */
  padding: 32px 32px 0px 32px;
  box-shadow: -3px -2px 2px ${lightReceivingColor}, 0px 2px 8px ${shadowColor};
`;

const Image = styled.img``;

const Data = styled.div``;

const Calendar = styled(CalendarRef)`
  path {
    fill: ${blueGreen};
  }
`;

const Price = styled.div``;

const Time = styled.div``;

const Location = styled.div``;

const Introduction = styled.p``;

export default ActivityContentCard;
