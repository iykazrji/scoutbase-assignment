import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_ALL_COUNTRIES } from "graphql/queries";
import {
  SectionWrapper,
  CountriesDataContainer,
  SectionHeader
} from "./styles";
import RenderCountries from "./render-countries";
import LoadingIndicatorComponent from "components/loading-indicator/loading-indicator-component";
import { TCountries } from "apollo";

interface ICountries {
  countries: [TCountries];
}

const Section1 = () => {
  const { data, loading, error } = useQuery<ICountries>(GET_ALL_COUNTRIES);

  return (
    <SectionWrapper>
      {loading ? <LoadingIndicatorComponent /> : null}
      {error ? <h4>An Error occured fetching Data</h4> : null}
      {data && data.countries && !loading && !error ? (
        <CountriesDataContainer
          mx="auto"
          width={[0.95, 0.9, 0.85, 0.7]}
          flexDirection="column">
          <SectionHeader>
            Scroll through our list of Countries. Click to view more details.
          </SectionHeader>
          <RenderCountries data={data.countries} />
        </CountriesDataContainer>
      ) : null}
    </SectionWrapper>
  );
};

export default Section1;
