import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BingoContext } from "../Context";
import Slash from "../images/slash.png";
import BackSlash from "../images/backslash.png";
import DoubleSlash from "../images/doubleSlash.svg";
import useInput from "../Hooks/useInput";

const TableTd = styled.td`
  position: relative;
  cursor: pointer;
  vertical-align: middle;
  border: ${props => props.theme.boxBorder};
  width: ${props => props.lineLength}%;
  height: ${props => props.lineLength}%;
  padding: 10px;
  word-break: break-all;
  background-color: ${props => props.isSelected && props.theme.redColor};
  color: ${props =>
    props.isSelected ? props.theme.whiteColor : props.theme.blackColor};
  user-select: none;
  background-image: ${props =>
    props.isLeftCross && "url(" + Slash + ")"};
  background-image: ${props =>
    props.isRightCross && "url(" + BackSlash + ")"};
  background-image: ${props =>
    props.isRightCross && props.isLeftCross && "url(" + DoubleSlash + ")})"};
  background-size: 100% 100%;
`;

const Horizontal = styled.hr`
  display: ${props => (props.isHorizontal ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin: 0;
  border: 1px solid #252525;
`;

const Vertical = styled.hr`
  display: ${props => (props.isVertical ? "block" : "none")};
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  border: 1px solid #252525;
`;

const ContentInput = styled.textarea`
  display: ${props => (props.isModify ? "block" : "none")};
  font-size: ${props => props.fontSize}px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  resize: none;
  padding-top: 35%;
  overflow: hidden;
`;

const checkIsRightCross = idx => {
  if (idx[0] === idx[1]) {
    return true;
  } else {
    return false;
  }
};

const checkIsLeftCross = (idx, line) => {
  if (idx[0] + idx[1] === line - 1) {
    return true;
  } else {
    return false;
  }
};

export default ({ idx, ranNum, isFixed }) => {
  const {
    line,
    isReset,
    horizontalArray,
    verticalArray,
    rightCrossCount,
    leftCrossCount,
    SelectedArrayPop,
    SelectedArrayPush,
    resetTrueToFalse,
    modifyArray,
    modifyArrayHandler
  } = useContext(BingoContext);

  const [isSelected, setIsSelected] = useState(false);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isVertical, setIsVertical] = useState(false);
  const [isRightCross, setIsRightCross] = useState(false);
  const [isLeftCross, setIsLeftCross] = useState(false);
  const [tdContent, setTdContent] = useState(ranNum);
  const isRightCrossTarget = checkIsRightCross(idx);
  const isLeftCrossTarget = checkIsLeftCross(idx, line);
  const ContentInputHook = useInput(ranNum);

  const onClickHandler = async idx => {
    if (isFixed) {
      await setIsSelected(p => !p);
      const currentSeleted = !isSelected;
      if (currentSeleted === true) {
        SelectedArrayPush(idx);
      } else {
        SelectedArrayPop(idx);
      }
    } else {
      modifyArrayHandler(idx);
    }
  };

  useEffect(() => {
    const LineValue = line;
    const Index = idx;

    horizontalArray[Index[0]] === LineValue
      ? setIsHorizontal(true)
      : setIsHorizontal(false);
    verticalArray[Index[1]] === LineValue
      ? setIsVertical(true)
      : setIsVertical(false);
    rightCrossCount === line && isRightCrossTarget
      ? setIsRightCross(true)
      : setIsRightCross(false);
    leftCrossCount === line && isLeftCrossTarget
      ? setIsLeftCross(true)
      : setIsLeftCross(false);
  }, [
    idx,
    line,
    horizontalArray,
    verticalArray,
    rightCrossCount,
    leftCrossCount,
    isLeftCrossTarget,
    isRightCrossTarget
  ]);

  useEffect(() => {
    isReset === true && setIsSelected(false);
    resetTrueToFalse();
  }, [isReset, resetTrueToFalse]);

  useEffect(() => {
    setTdContent(ContentInputHook.value);
  }, [ContentInputHook, modifyArray])

  return (
    <TableTd
      lineLength={100 / line}
      isSelected={isSelected}
      onClick={() => onClickHandler(idx)}
      isRightCross={isRightCross}
      isLeftCross={isLeftCross}
    >
      {tdContent}
      <ContentInput
        {...ContentInputHook}
        isModify={isFixed === false && modifyArray[0] === idx[0] && modifyArray[1] === idx[1]}
        fontSize={100 / line}
      />
      <Horizontal isHorizontal={isHorizontal} />
      <Vertical isVertical={isVertical} />
    </TableTd>
  );
};
