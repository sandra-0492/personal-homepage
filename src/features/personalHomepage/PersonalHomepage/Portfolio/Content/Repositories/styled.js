import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
    margin-top: 24px;
    grid-gap: 32px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-gap: 24px;
        grid-template-columns: 1fr;
    }
`;

export const Tile = styled.li`
    background: ${({ theme }) => theme.colors.boxBackground};
    border: 6px solid ${({ theme }) => theme.colors.tile.border};
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 56px;
    margin: 0;
    transition: border-color 0.3s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.tile.borderHover};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 20px;
    }
`;

export const Name = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.tile.header};
    font-size: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    line-height: 1.4;
    margin-top: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin-top: 16px;
    }
`;

export const Links = styled.dl`
    display: grid;
    grid-gap: 8px;
    margin-bottom: 0;
    margin-top: 24px;
    line-height: 1.6;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 14px;
        margin-top: 16px;
    }
`;

export const LinksRow = styled.div`
    display: grid;
    grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 1px solid ${({ theme }) => α(theme.colors.primary, 0.3)};

    &:hover {
        border-color: unset;
    }
`;