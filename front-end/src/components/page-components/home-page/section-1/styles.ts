import Styled from "styled-components";
import { Flex, Box } from "rebass";
import { Link } from "react-router-dom";

export const SectionWrapper = Styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeroContentWrapper = Styled(Flex)`
    border: 1px solid rgba(250, 250, 250, 0.3);
    padding: 10rem 5rem; 
`;

export const HeroContentItem = Styled(Box)`
    height: 100%;
`;

export const HeroMainHeading = Styled.h1`
    font-size: 4.5rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 5px;

    @media screen and (max-width: 1024px){
        font-size: 3.4rem;
    }
    @media screen and (max-width: 768px){
        font-size: 2.8rem;
    }
`;

export const HeroSubText = Styled.p`
    font-size: 1.8rem;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
`;

export const ActionLink = Styled(Link)`
    display: block;
    width: 15rem;
    padding: 2rem 1rem;
    border: 1px solid;
    color: ${props => props.theme.colors.white || "#FFFFFF"};
    margin: 0 auto;
    font-size: 1.7rem;
    text-decoration: none;
    text-align: center;
    transition: color .35s ease-out;
    &:hover{ 
        color: ${props => props.theme.colors.green || "#$D7B7D"};
    }
    @media screen and (max-width: 1024px){
        padding: 1rem;
        font-size: 1.4rem;
    }
    @media screen and (max-width: 768px){
        /* font-size: 2.8rem; */
    }
`;
