import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  margin-top: 88px;
  text-align: center;
  display: grid;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
    font-size: 17px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  height: auto;
  color: ${({ theme }) => theme.colors.pimary};
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 60px;
    margin-top: 32px;
  }
`;
