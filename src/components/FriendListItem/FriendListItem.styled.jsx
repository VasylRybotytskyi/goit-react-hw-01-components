import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    border-color: #999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 5%;
`;

export const Name = styled.p`
  margin: 0;
`;
