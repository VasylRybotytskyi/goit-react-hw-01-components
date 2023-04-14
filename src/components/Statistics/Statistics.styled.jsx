import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  max-width: 300px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 50px;
  background-color: rgb(
    ${() => Math.floor(Math.random() * 256)},
    ${() => Math.floor(Math.random() * 256)},
    ${() => Math.floor(Math.random() * 256)}
  );
`;

export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
