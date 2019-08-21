import Styled from "styled-components/macro";
import { Flex, Box } from "rebass";
import { Link } from "react-router-dom";

export const SectionWrapper = Styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeroContentWrapper = Styled(Flex)`
    border: 1px solid rgba(250, 250, 250, 0.3);
`;

export const HeroContentItem = Styled(Box)`
    height: 100%;
`;

export const HeroMainHeading = Styled.h1`
    font-size: 4.5rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 3rem;
    > .colorize {
        color: ${props => props.theme.colors.green};
    }
    @media screen and (max-width: 1024px){
        font-size: 3.4rem;
    }
    @media screen and (max-width: 768px){
        font-size: 2.8rem;
    }
`;

export const HeroSubItemsContainer = Styled(Flex)`
    border-top: 1px solid rgba(250, 250, 250, 0.3);
`;
export const HeroSubItem = Styled(Box)`
    padding: 1rem 2rem;
    height: 100%;
`;
export const HeroSubItemHeading = Styled.h2`
    font-size: 1.6rem;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 1.3rem;
    }
`;
export const HeroSubItemBody = Styled.p`
    font-size: 2.1rem;
    color: ${props => props.theme.colors.orange};
    text-align: center;
    
    @media screen and (max-width: 768px){
        font-size: 1.7rem;
    }
`;
export const ErrorMessageText = Styled.p`
    font-size: 2.4rem;
    text-align: center;
    padding: 0rem 10rem;
    @media screen and (max-width: 768px){
        font-size: 1.6rem;
    }
`;

export const HomeLink = Styled(Link)`
    font-size: 1.6rem;
    text-decoration: underline;
    color: inherit;
    display: block;
    margin-top: 2rem;
`;
