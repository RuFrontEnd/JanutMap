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

const Container = Radium(styled.button`
  background: ${shallowMainColor};
  box-shadow: 0px 2px 8px 0px ${shadowColor},
    -3px -2px 2px 0px ${lightReceivingColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => (props.sharpRadius ? "8px" : "10px")};
  cursor: pointer;
`);

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  margin-right: 10px;
`;

const Text = styled.p`
  color: ${(props) => (props.color ? props.color : textColor)};
  font-family: ${notoSans};
  font-size: 20px;
  font-weight: 400;
`;

const JauntButton = (props) => {
  const {
    icon,
    style,
    sharpRadius = true,
    textColour,
    text = "text",
    onClick,
  } = props;

  return (
    <Container style={style} sharpRadius={sharpRadius} onClick={onClick}>
      <Wrap>
        <Icon src={icon} />
        <Text color={textColour}>{text}</Text>
      </Wrap>
    </Container>
  );
};

export default JauntButton;
