import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import TableTr from "./TableTr";
import useInput from "../Hooks/useInput";
import { BingoContext } from "../Context";
import bingoImg from "../images/bingo_image.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Table = styled.table`
  width: 80vh;
  height: 80vh;
  min-width: 500px;
  min-height: 500px;
  font-size: ${props => props.fontSize}px;
  background-color: ${props => props.theme.tableColor};
`;

const TableBody = styled.tbody``;

const LineInputWrapper = styled.div`
  margin-left: ${props => props.mrAuto && "auto"};
`;

const InputWrapper = styled.div`
  width: 80vh;
  min-width: 500px;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 20px;
  font-family: "Noto Sans KR", sans-serif;
`;

const LineInput = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  padding: 7px 0px;
  width: 40px;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.blackColor};
`;

const Button = styled.div`
  cursor: pointer;
  padding: 0 10px;
  height: 39px;
  line-height: 39px;
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.theme.whiteColor};
  background-color: ${props => props.theme.redColor};
  margin-right: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

const CanelBtn = styled(Button)`
  margin-right: 0;
  background-color: ${props => props.theme.darkGreyColor};
  color: ${props => props.theme.blackColor};
`;

const CurrentLine = styled.div`
  line-height: 39px;
  margin-right: 10px;
  margin-left: 0;
`;

const CurrentFont = styled.span`
  font-size: 20px;
`;

const TotalCount = styled(CurrentLine)`
  font-weight: bold;
  margin-left: auto;
  color: #00ff38;
  font-size: 20px;
`;

const ModifyBtn = styled.div`
  cursor: pointer;
  height: 39px;
  line-height: 39px;
  padding: 0 20px;
  font-weight: bold;
  color: ${props => props.theme.whiteColor};
  background-color: ${props => props.theme.redColor};
  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.div`
  font-family: "Nanum Pen Script", cursive;
  font-size: 60px;
  margin-bottom: 30px;
  width: 80vh;
  min-width: 500px;
  text-align: center;
  position: relative;
`;

const SubTitle = styled.div`
  font-size: 15px;
  text-align: right;
  width: 80vh;
  min-width: 500px;
  margin-bottom: 10px;
  color: #191970;
  font-weight: 700;
`;

const TitleText = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-top: 22px;
  margin-right: 20px;
`;

const BingoImage = styled.img`
  vertical-align: middle;
  width: 100px;
  height: 100px;
`;

const ChangeLaunguage = styled(Link)`
  font-size: 20px;
  margin-left: auto;
  position: absolute;
  right: 0;
  top: 0;
  text-decoration: none;
  color: #4d38f5;
`;

export default (props) => {
  const isEnglish = props.isEnglish;
  const { line, LineHandlerFunc, totalCount } = useContext(BingoContext);

  const [loading, setLoading] = useState(true);
  const [isFixed, setIsFixed] = useState(true);
  const [lineArray, setLineArray] = useState([]);
  const [ranArray, setRanArray] = useState([]);
  const LineNumber = useInput(line);

  const isNumber = n => {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  };

  const LineHandler = () => {
    const LineValue = Number(LineNumber.value);
    if (
      isNumber(LineValue) === true &&
      LineValue > 0 &&
      LineValue < 10 &&
      LineValue !== line
    ) {
      const confirmMent = isEnglish
      ? "Do you want to change BingoBoard?\n(previous content will be deleted)"
      : "빙고판을 바꾸시겠습니까?\n(기존 내용들이 전부 사라집니다)";
      const result = window.confirm(
        confirmMent
      );
      if (result) {
        LineHandlerFunc(LineValue);
        setIsFixed(true);
      }
    } else if (LineValue === line) {
      setIsFixed(true);
    } else {
      const alertMent = isEnglish
      ? "Bingo Board can be until 9 lines!"
      : "빙고는 9자리 까지만 가능합니다!";
      alert(alertMent);
    }
  };

  const LineKeyHandler = e => {
    if (e.key === "Enter") {
      LineHandler();
    }
  };

  useEffect(() => {
    const tempLineHandler = lineTotal => {
      const tempLineArray = [];
      let i;
      for (i = 0; i < lineTotal; i++) {
        tempLineArray.push(i);
      }

      return tempLineArray;
    };

    const shuffle = a => {
      var j, x, i;
      for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
      }
      return a;
    };

    const slicedArray = (a, sliceNum) => {
      let chunkArray = [];
      let i;
      for (i = 1; i <= sliceNum; i++) {
        chunkArray.push(a.slice((i - 1) * sliceNum, i * sliceNum));
      }
      return chunkArray;
    };

    const tempRanHandler = lineTotal => {
      let j;
      let tempRanArray = [];

      for (j = 1; j <= lineTotal * lineTotal; j++) {
        tempRanArray.push(j);
      }

      tempRanArray = shuffle(tempRanArray);
      tempRanArray = slicedArray(tempRanArray, lineTotal);

      return tempRanArray;
    };

    const lineTotal = line;
    const tempLineArray = tempLineHandler(lineTotal);
    const tempRanArray = tempRanHandler(lineTotal);

    setLineArray([...tempLineArray]);
    setRanArray([...tempRanArray]);
    setLoading(false);
  }, [line]);

  useEffect(() => {
    LineHandlerFunc(line);
  }, [])

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Title>
            <TitleText>Bingo</TitleText>
            <BingoImage src={bingoImg} />
            {
              isEnglish ? (
                <ChangeLaunguage to="/">한국어 버전하기</ChangeLaunguage>
              ) : (
                <ChangeLaunguage to="/en">English ver.</ChangeLaunguage>
              )
            }
          </Title>
          <SubTitle>
            {
              isEnglish ? (
                "* If you click modify button, you can change content."
              ) : (
                "* 수정하기 클릭시 빙고판의 내용을 바꿀 수 있습니다."
              )
            }
          </SubTitle>
          <InputWrapper>
            {isFixed ? (
              <>
                <TotalCount>
                  {totalCount !== 0 && totalCount + " Bingo !"}
                </TotalCount>
                <CurrentLine>
                  { isEnglish ? "Current Line" : "현재 라인" }: <CurrentFont>{line}</CurrentFont>
                </CurrentLine>
                <ModifyBtn
                  onClick={() => {
                    setIsFixed(false);
                    LineNumber.setValue(line);
                  }}
                >
                  { isEnglish ? "Modify" : "수정하기" }
                </ModifyBtn>
              </>
            ) : (
              <>
                <LineInputWrapper mrAuto={true}>
                  { isEnglish ? "Line" : "라인 수" }:
                  <LineInput {...LineNumber} onKeyPress={LineKeyHandler} />
                </LineInputWrapper>
                <Button onClick={LineHandler}>
                  { isEnglish ? "Setting" : "설정하기" }
                </Button>
                <CanelBtn onClick={() => setIsFixed(true)}>
                  { isEnglish ? "Cancel" : "취소" }
                </CanelBtn>
              </>
            )}
          </InputWrapper>
          <Table fontSize={100 / line}>
            <TableBody>
              {lineArray.map((num, index) => (
                <TableTr
                  key={num}
                  idx={num}
                  lineArray={lineArray}
                  ranArray={ranArray[index]}
                  isFixed={isFixed}
                />
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </Wrapper>
  );
};
