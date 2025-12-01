import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  margin: auto;
  max-width: 1248px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const Icon = styled.img`
  margin-left: 5px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
  }
`;