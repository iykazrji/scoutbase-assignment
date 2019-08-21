import Styled from "styled-components";
export const LoadingIndicatorWrapper = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingIndicatorContainer = Styled.div`
    width: 10rem;
    height: 10rem;
    > img {
        max-width: 100%;
        max-height: 100%;
    }
`;
