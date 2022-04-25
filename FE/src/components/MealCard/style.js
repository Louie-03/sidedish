import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  img {
    width: 300px;
    height: 300px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h4 {
    color: ${({ theme }) => theme.color.grey1};
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 8px 0px;
  }
  p {
    color: ${({ theme }) => theme.color.grey2};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    margin: 8px 0px;
  }
`;

export const PriceContainer = styled.div`
  margin: 8px 0px;
  span {
    &:first-child {
      color: ${({ theme }) => theme.color.black};
      font-size: ${({ theme }) => theme.fontSize.medium};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    &:last-child {
      margin: 0px 8px;
      color: ${({ theme }) => theme.color.grey3};
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      letter-spacing: -0.008em;
      text-decoration-line: line-through;
    }
  }
`;

export const DiscoutType = styled.div`
  margin: 10px 0px;
  width: 76px;
  height: 30px;
  border-radius: 20px;
  background-color: ${({ theme, isLaunchingDiscount }) =>
    isLaunchingDiscount ? theme.color.orange : theme.color.green};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  line-height: 30px;
`;
