import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: none;
  display: flex;
  border: none;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-weight: bold;
  margin-right: 12px;
  font-size: 12px;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  display: flex;
  width: 48px;
  padding: 3px;
  border: 1px solid;
  border-radius: 12px;
`;

export const IconWrapper = styled.span`
  background: currentColor;
  display: flex;
  border-radius: 50%;
  padding: 3px;
  transition: transform 0.3s;

  ${({ moveToRight }) => moveToRight && css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
