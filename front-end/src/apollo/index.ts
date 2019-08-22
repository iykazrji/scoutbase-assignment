import ApolloClient, { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

import { baseURL } from "config";

// Declare interfaces
export interface ICountry {
  code: string;
  name: string;
  native: string;
  phone: string;
  currency: string;
  continent: {
    name: string;
  };
  languages: [
    {
      name: string;
      native: string;
    }
  ];
  emoji: string;
}

export type TCountries = [ICountry];

const cache = new InMemoryCache();

const typeDefs = gql`
  extend type Language {
    code: String
    name: String
    native: String
  }
  extend type Continent {
    name: String
  }
  extend type Country {
    code: String
    name: String
    native: String
    phone: String
    currency: String
    continent: Continent
    languages: Language
    emoji: String
  }
`;

export const client = new ApolloClient({
  uri: baseURL,
  cache,
  typeDefs
});
