import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ReactComponent as BulletImage } from "./bullet.svg";

export const Section = styled.section`
  padding: 32px;
  margin-top: 72px;
  background: ${({ theme }) => theme.colors.boxBackground};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    margin-top: 48px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  margin-top: 32px;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 12px;
    font-size: 14px;
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  display: flex;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    line-height: 1.2;
  }
`;

export const Bullet = styled(BulletImage)`
  height: auto;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-right: 8px;
    width: 6px;
  }
`;

export const StyleHeader = styled(SubHeader)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  padding-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 12px;
  }
`;
