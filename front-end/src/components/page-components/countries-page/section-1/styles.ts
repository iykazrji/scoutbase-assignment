import Styled from "styled-components";
import { Flex, Box } from "rebass";
import { Link } from "react-router-dom";

export const SectionWrapper = Styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    padding-top: 10rem;
`;
export const SectionHeader = Styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    @media screen and (max-width: 728px){
        font-size: 1.6rem;
        margin-bottom: 2.5rem;
    }
`;

export const CountriesDataContainer = Styled(Flex)`
    padding: .5rem;
`;

export const CountriesList = Styled(Flex)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const CountriesCardCell = Styled(Box)`
    padding: 1.5rem;
    @media screen and (max-width: 728px){
        padding: 1rem;
    }
`;
export const CountriesCardCellContent = Styled(Link)`
    border: 1px solid rgba(250, 250, 250, 0.25);
    padding: 1.5rem;
    height: 100%;
    display: block;
    color: ${props => props.theme.colors.grey || "#e1e1e1"};
    text-decoration: none;
    transition: border .4s ease-out;
    &:hover {
        border: 1px solid ${props => props.theme.colors.orange || "#FE6A6A"};
    }
`;
export const CountryNameIndicator = Styled.h4`
    font-size: 1.4rem;
    letter-spacing: 1.5px;
    margin: 0px;
    color: ${props => props.theme.colors.grey || "#e1e1e1"};
    @media screen and (max-width: 728px){
        font-size: 1.3rem;
    }

`;
export const ContinentNameIndicator = Styled.span`
    display: block;
    width: 100%;
    font-size: 1.3rem;
    color: ${props => props.theme.colors.green || "#41c7c7"};
    @media screen and (max-width: 728px){
        font-size: 1.15rem;
    }
`;
export const LanguagesInfoWrapper = Styled.div`
    width: 100%;
    padding: .4rem 0px;
    > .title-text {
        font-size: 1.2rem;
        padding: 0px;
        margin-bottom: 5px;
        @media screen and (max-width: 728px){
        font-size: 1.15rem;
    }
    }
    > .language-list {
        font-size: 1.1rem;
        line-height: 1.8rem;
        @media screen and (max-width: 728px){
        font-size: 1.1rem;
    }
    } 
`;
