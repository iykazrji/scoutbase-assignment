import React from "react";
import {
  LoadingIndicatorWrapper,
  LoadingIndicatorContainer
} from "./loading-indicator-styles";
import LoadingIndicator from "resources/vectors/loading-indicator.svg";

const LoadingIndicatorComponent = () => (
  <LoadingIndicatorWrapper>
    <LoadingIndicatorContainer>
      <img alt="loading" src={LoadingIndicator} />
    </LoadingIndicatorContainer>
  </LoadingIndicatorWrapper>
);

export default LoadingIndicatorComponent;
