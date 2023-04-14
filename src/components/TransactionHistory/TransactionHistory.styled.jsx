import styled from 'styled-components';

export const TableTransitionHistory = styled.table`
  font-family: Arial, sans-serif;
  width: 90%;
  border-collapse: collapse;
  margin-top: 20px;
`;
export const ColumnTitle = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;
export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;
export const TableHead = styled.thead`
  background-color: #3498db;
`;
export const TableRow = styled.tr`
  background-color: ${({ index }) =>
    index % 2 === 1 ? '#f5f5f5' : 'transparent'};
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
