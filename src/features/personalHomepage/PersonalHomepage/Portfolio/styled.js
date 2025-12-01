import styled from "styled-components";
import {ReactComponent as GithubIcon} from "./github.svg";

export const Section = styled.section`
    margin-top: 72px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    }
`;

export const StyledGithubIcon = styled(GithubIcon)`
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.header`
    text-align: center;
`;

export const MyRecentProjects = styled.h3`
    font-size: 20px;
    margin-top: 8px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 17px;
    }
`;