import React from "react";
import styled from "styled-components";
import TableTd from "./TableTd";

const TableTr = styled.tr`
  border: ${props => props.theme.boxBorder};
`;

export default ({ idx, lineArray, ranArray, isFixed }) => {
  return (
    <TableTr>
      {lineArray.map((num, index) => (
        <TableTd
          key={num}
          idx={[idx, num]}
          lineArray={lineArray}
          ranNum={ranArray[index]}
          isFixed={isFixed}
        />
      ))}
    </TableTr>
  );
};
