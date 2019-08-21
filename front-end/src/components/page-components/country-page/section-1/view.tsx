import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

import { GET_COUNTRY } from "graphql/queries";
import {
  SectionWrapper,
  HeroContentWrapper,
  HeroContentItem,
  HeroMainHeading,
  HeroSubItemsContainer,
  HeroSubItem,
  HeroSubItemHeading,
  HeroSubItemBody,
  ErrorMessageText,
  HomeLink
} from "./styles";
import { ICountry } from "apollo";

import LoadingIndicatorComponent from "components/loading-indicator/loading-indicator-component";
const Section1 = (props: any) => {
  interface ICountryData {
    country: ICountry;
  }
  const { loading, data, error } = useQuery<ICountryData>(GET_COUNTRY, {
    variables: { code: props.match.params.code }
  });

  return (
    <SectionWrapper>
      {loading ? <LoadingIndicatorComponent /> : null}
      {error ? (
        <React.Fragment>
          <HeroMainHeading>
            <span role="img" aria-label="injured">
              🤕
            </span>
          </HeroMainHeading>
          <ErrorMessageText>An Error Occured Fetching Data</ErrorMessageText>
        </React.Fragment>
      ) : null}
      {data && data.country ? (
        <HeroContentWrapper
          width={[0.9, 0.85, 0.75, 0.7]}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          flexDirection="column">
          <HeroContentItem width={[1]} mt={["5rem"]}>
            <HeroMainHeading className="emoji">
              {data.country.emoji}
            </HeroMainHeading>
            <HeroMainHeading>
              {`Greetings to the world from `}
              <span className="colorize">{data.country.name}</span>!
            </HeroMainHeading>
            <HeroSubItemsContainer flexDirection="row">
              <HeroSubItem
                width={[1 / 2]}
                css={{
                  borderRight: "1px solid rgba(250, 250, 250, 0.3)"
                }}>
                <HeroSubItemHeading>Our Currency</HeroSubItemHeading>
                <HeroSubItemBody>{`"${data.country.currency}"`}</HeroSubItemBody>
              </HeroSubItem>

              <HeroSubItem
                width={[1 / 2]}
                css={{
                  borderRight: "1px solid rgba(250, 250, 250, 0.3)"
                }}>
                <HeroSubItemHeading>Our Country Code</HeroSubItemHeading>
                <HeroSubItemBody>{`"${data.country.phone}"`}</HeroSubItemBody>
              </HeroSubItem>
            </HeroSubItemsContainer>
          </HeroContentItem>
        </HeroContentWrapper>
      ) : !loading ? (
        <React.Fragment>
          <HeroMainHeading>
            <span role="img" aria-label="think-emoji">
              🤔
            </span>
          </HeroMainHeading>
          <ErrorMessageText>
            Are you thinking about creating a new Country? Well this country
            code is available!
          </ErrorMessageText>
        </React.Fragment>
      ) : null}
      <HomeLink to="/countries">Back to Countries</HomeLink>
    </SectionWrapper>
  );
};

export default withRouter(Section1);
