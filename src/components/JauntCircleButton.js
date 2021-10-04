import React from "react";
import styled from "styled-components/macro";
import {
  shallowMainColor,
  lightReceivingColor,
  shadowColor,
  textColor,
  notoSans,
} from "variable/variable";
import Radium from "radium";

const ContainerStyledComponent = styled.button`
  background: ${shallowMainColor};
  box-shadow: -2px -2px 1px ${lightReceivingColor}, 0px 0px 5px ${shadowColor};
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
`;

const Container = Radium(ContainerStyledComponent);

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img``;

const JauntCircleButton = (props) => {
  const {
    icon,
    style,
    sharpRadius = true,
    textStyle,
    text = "text",
    onClick,
  } = props;

  return (
    <Container style={style} sharpRadius={sharpRadius} onClick={onClick}>
      <Wrap>
        <Icon src={icon} />
      </Wrap>
    </Container>
  );
};

export default JauntCircleButton;
