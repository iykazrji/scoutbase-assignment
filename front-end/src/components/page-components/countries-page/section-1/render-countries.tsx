import React from "react";
import { ICountry } from "apollo";
import {
  CountriesCardCell,
  CountriesCardCellContent,
  CountryNameIndicator,
  ContinentNameIndicator,
  LanguagesInfoWrapper,
  CountriesList
} from "./styles";

interface IRenderCountriesProps {
  data: [{ name?: string }];
  style?: {};
  index: number;
}

const RenderCountries: React.FC<IRenderCountriesProps & any> = props => {
  const renderCountries = (data: typeof props.data) =>
    data.map((country: ICountry) => (
      <CountriesCardCell width={[1 / 2, 1 / 2, 1 / 3]} key={country.code}>
        <CountriesCardCellContent to={`country/${country.code}`}>
          <CountryNameIndicator>{`${country.name}  ${country.emoji}`}</CountryNameIndicator>
          <ContinentNameIndicator>{`${country.continent.name}`}</ContinentNameIndicator>
          <LanguagesInfoWrapper>
            <p className="title-text">We Speak:</p>
            {country.languages.length > 0 ? (
              country.languages.map((language, index) => (
                <span className="language-list" key={language.name}>{`${
                  index > 0 ? ", " : ""
                }${language.name}(${language.native})`}</span>
              ))
            ) : (
              <span role="img" aria-label="shhh-emoji">
                🤫
              </span>
            )}
          </LanguagesInfoWrapper>
        </CountriesCardCellContent>
      </CountriesCardCell>
    ));

  return <CountriesList>{renderCountries(props.data)}</CountriesList>;
};

export default RenderCountries;
