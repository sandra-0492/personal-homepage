import styled from "styled-components";

export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  font-size: 30px;
  font-weight: 900;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
