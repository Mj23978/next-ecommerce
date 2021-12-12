import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { createFetch, createSaleorClient } from "@saleor/sdk";

import { API_URI, DEFAULT_CHANNEL } from "./const";
import { typePolicies } from "./typePolicies";

const httpLink = createHttpLink({
  // uri: API_URI,
  // uri: "http://localhost:8000/graphql/",
  uri: "https://vercel.saleor.cloud/graphql/",
  fetch: createFetch(),
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ typePolicies }),
  ssrMode: !process.browser,
});

export const saleorClient = createSaleorClient({
  // apiUrl: API_URI,
  apiUrl: "https://vercel.saleor.cloud/graphql/",
  channel: DEFAULT_CHANNEL,
});

export default apolloClient;
