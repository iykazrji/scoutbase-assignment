import { gql } from "apollo-boost";

export const GET_ALL_COUNTRIES = gql`
  query AllCountries {
    countries {
      code
      name
      native
      emoji
      languages {
        name
        native
      }
      continent {
        name
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($code: String) {
    country(code: $code) {
      name
      native
      phone
      currency
      emoji
    }
  }
`;
