import React from "react";
import styled from "styled-components/macro";
import {
  lightReceivingColor,
  shadowColor,
  seperateBarColor,
} from "variable/variable";

const SeperateBar = () => {
  return <Container />;
};

const Container = styled.section`
  height: 12px;
  background-color: ${seperateBarColor};
  box-shadow: 0px -2px 0px ${lightReceivingColor}, 0px 2px 12px ${shadowColor};
`;

export default SeperateBar;
