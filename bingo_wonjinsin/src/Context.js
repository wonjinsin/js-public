import React, { createContext, useState, useEffect } from "react";

export const BingoContext = createContext();

export const BingoProvider = ({ children, idx }) => {
  const LineHandlerFunc = line => {
    setLine(line);
    initializeBoard(line);
  };

  const initializeBoard = (line) => {
    setIsReset(true);
    setHorizontalArray([]);
    setVerticalArray([]);
    setRightCrossCount(0);
    setLeftCrossCount(0);
    setTotalCount(0);
    for(let i = 0; i < line; i++){
      setHorizontalArray(prevState => {
        return [...prevState, 0];
      });
      setVerticalArray(prevState => {
        return [...prevState, 0];
      });
    }
  }

  const SelectedArrayPush = idx => {
    const tempHoriArray = [...horizontalArray];
    const tempVertiArray = [...verticalArray];
    tempHoriArray[idx[0]] += 1;
    tempVertiArray[idx[1]] += 1;
    setHorizontalArray([...tempHoriArray]);
    setVerticalArray([...tempVertiArray]);

    if(idx[0] === idx[1]){
      setRightCrossCount(prevState => {
        return prevState+1;
      })
    }

    if(idx[0] + idx[1] === line - 1){
      setLeftCrossCount(prevState => {
        return prevState+1;
      })
    }

  };

  const SelectedArrayPop = idx => {
    const tempHoriArray = [...horizontalArray];
    const tempVertiArray = [...verticalArray];
    tempHoriArray[idx[0]] -= 1;
    tempVertiArray[idx[1]] -= 1;
    setHorizontalArray([...tempHoriArray]);
    setVerticalArray([...tempVertiArray]);

    if(idx[0] === idx[1]){
      setRightCrossCount(prevState => {
        return prevState-1;
      })
    }

    if(idx[0] + idx[1] === line - 1){
      setLeftCrossCount(prevState => {
        return prevState-1;
      })
    }
  };

  const resetTrueToFalse = () => {
    setIsReset(false);
  }

  const modifyArrayHandler = (idx) => {
    setModifyArray([idx[0], idx[1]]);
  }

  const [line, setLine] = useState(5);
  const [isReset, setIsReset] = useState(true);
  const [horizontalArray, setHorizontalArray] = useState([0, 0, 0, 0, 0]);
  const [verticalArray, setVerticalArray] = useState([0, 0, 0, 0, 0]);
  const [modifyArray, setModifyArray] = useState([]);
  const [rightCrossCount, setRightCrossCount] = useState(0);
  const [leftCrossCount, setLeftCrossCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    let count = 0;
    for(let i = 0; i < line; i++){
      horizontalArray[i] === line && count++;
      verticalArray[i] === line && count++;
    }
    rightCrossCount === line && count++;
    leftCrossCount === line && count++;
    setTotalCount(count);
  }, [line, horizontalArray, verticalArray, rightCrossCount, leftCrossCount]);

  return (
    <BingoContext.Provider
      value={{
        line,
        isReset,
        LineHandlerFunc,
        horizontalArray,
        verticalArray,
        leftCrossCount,
        rightCrossCount,
        SelectedArrayPush,
        SelectedArrayPop,
        resetTrueToFalse,
        totalCount,
        modifyArray,
        modifyArrayHandler
      }}
    >
      {children}
    </BingoContext.Provider>
  );
};
