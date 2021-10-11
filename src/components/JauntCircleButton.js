import React from "react";
import styled from "styled-components/macro";
import {
  shallowMainColor,
  lightReceivingColor,
  shadowColor,
  selectedColor,
  selectedShadowColor,
} from "variable/variable";
import Radium from "radium";

const ContainerStyledComponent = styled.button`
  background: ${(props) => (props.selected ? selectedColor : shallowMainColor)};
  box-shadow: ${(props) =>
    props.selected
      ? selectedShadowColor
      : `-2px -2px 1px ${lightReceivingColor}, 0px 0px 5px ${shadowColor}`};
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
    className,
    icon,
    style,
    sharpRadius = true,
    onClick,
    selected,
    children,
  } = props;

  return (
    <Container
      className={className}
      style={style}
      sharpRadius={sharpRadius}
      onClick={onClick}
      selected={selected}
    >
      <Wrap>
        {icon && <Icon src={icon} />}
        {children}
      </Wrap>
    </Container>
  );
};

export default JauntCircleButton;
