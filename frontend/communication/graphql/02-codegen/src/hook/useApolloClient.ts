import { useState } from "react";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from '@apollo/client/link/retry';

/* eslint-disable no-console */

/**
 * Will give use the client to use with GQL
 * @param authToken
 */
export default function useApolloClient(authToken: string): ApolloClient<any> {
  const createApolloClient = (): ApolloClient<any> => {
    const serviceUri = process.env.REACT_APP_GQL + "/v1/graphql";

    /**
     * Main error handler
     */
    const errorLink = onError(
      ({ graphQLErrors, networkError, operation, forward }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );

        if (networkError) console.log(`[Network error]: ${networkError}`);
      }
    );

    /**
     * Http linker
     */
    const httpLink = new HttpLink({
      uri: serviceUri,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "X-Hasura-Role": "editor",
      },
    });

    /**
     * Retry when request fails
     */
    const retryLink = new RetryLink({
      delay: {
        initial: 2000,
        max: Infinity,
        jitter: true,
      },
      attempts: {
        max: 10,
        retryIf: (error) => !!error,
      },
    });

    /**
     * Create client
     */
    return new ApolloClient({
      link: from([errorLink, httpLink]),
      cache: new InMemoryCache(),
    });
  };

  return useState(createApolloClient())[0];
}
