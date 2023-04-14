import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Tag = styled.p`
  font-size: 18px;
  color: gray;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 18px;
  color: gray;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;
  margin: 0;
  padding: 15px 15px 0px 15px;
  background-color: #f5f5f5;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 16px;
  color: gray;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
