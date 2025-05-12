import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  line-height: 1.2;

  h1 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 10px 0;
`;

export const Content = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

export const List = styled.ol`
  margin-top: 5px;
  counter-reset: item;
  padding-left: 10px;
`;

export const ListItem = styled.li`
  font-size: 14px;
  list-style: none;
  counter-increment: item;
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  display: block;
  line-height: 1.4;

  &::before {
    content: counter(item);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #666;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
  }

  ul {
    margin-top: 5px;
  }
`;

export const Red = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 500;
  display: inline;
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const NormalListItem = styled.li`
  position: relative;
  display: block;
  padding-left: 20px;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.4;

  &::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #666;
  }
`;

export const NormalList = styled.ul`
  margin-top: 5px;
`;

export const StartDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
`;
