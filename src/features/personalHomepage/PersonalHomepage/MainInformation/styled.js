import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg";

export const Wrapper = styled.header`
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  margin-top: -30px;
  display: grid;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 12px;
    grid-template-columns: 1fr;
  }
`;

export const Avatar = styled.img`
  max-width: 384px;
  border-radius: 50%;
  width: 30vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;

export const ThisIs = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 38px;
  font-weight: 900;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Summary = styled.p`
  max-width: 650x;
  margin: 36px 0 0 0;
  font-size: 20px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 570px;
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  margin-right: 4px;
  vertical-align: text-top;
`;

export const StyledButtonLink = styled(ButtonLink)`
  margin-top: 32px;
  display: inline-flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  margin-right: 16px;
`;
