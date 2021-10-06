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
  box-shadow: 0px 2px 8px 0px ${shadowColor},
    -3px -2px 2px 0px ${lightReceivingColor};
  border-radius: ${(props) => (props.sharpRadius ? "8px" : "10px")};
  cursor: pointer;
`;

const Container = Radium(ContainerStyledComponent);

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  margin-right: 10px;
`;
const TextStyledComponent = styled.p`
  color: ${(props) => (props.color ? props.color : textColor)};
  font-family: ${notoSans};
  font-size: 20px;
  font-weight: 400;
`;

const Text = Radium(TextStyledComponent);

const JauntButton = (props) => {
  const {
    className,
    icon,
    style,
    sharpRadius = true,
    textStyle,
    text = "text",
    onClick,
  } = props;

  return (
    <Container
      className={className}
      style={style}
      sharpRadius={sharpRadius}
      onClick={onClick}
    >
      <Wrap>
        <Icon src={icon} />
        <Text style={textStyle}>{text}</Text>
      </Wrap>
    </Container>
  );
};

export default JauntButton;
