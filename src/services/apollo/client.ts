import { ApolloClient, InMemoryCache, from, Reference } from "@apollo/client";
import { AsyncStorageWrapper, persistCache } from "apollo3-cache-persist";
import { enableFlipperApolloDevtools } from "react-native-flipper-apollo-devtools";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistenceMapper } from "@muchobien/apollo-persistence-mapper";
import { retryLink, errorLink, httpLink, authLink, persistLink } from "./links";

type TransactionsResponse = { hasMore: boolean; transactions: Reference[] };
type TransactionsCache = {
  hasMore: boolean;
  transactions: {
    [__ref: string]: Reference;
  };
};

const cache = new InMemoryCache({
  typePolicies: {
    Account: {
      keyFields: [],
    },
    QueryTransactionsSuccess: {
      // there is no identifying type for `data`, so we mark it as a singleton
      // https://www.apollographql.com/docs/react/caching/cache-configuration/#customizing-cache-ids
      keyFields: [],
      fields: {
        data: {
          keyArgs: ["$merchantName", "$sort", "$filterType", "$transactedAfter"],
          read: (existing: TransactionsCache | undefined) =>
            existing
              ? {
                  hasMore: existing.hasMore,
                  transactions: Object.values(existing.transactions),
                }
              : existing,
          merge: (
            existing: TransactionsCache | undefined,
            incoming: TransactionsResponse,
          ) => {
            // For pagination of `Transactions`

            if (!existing) {
              return {
                hasMore: incoming.hasMore,
                transactions: incoming.transactions.reduce((acc, next) => {
                  acc[next.__ref] = next;

                  return acc;
                }, {} as TransactionsCache["transactions"]),
              };
            }

            let mergedData = {
              transactions: existing.transactions,
              hasMore: incoming.hasMore,
            };

            incoming.transactions.forEach((reference) => {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              if (!mergedData.transactions[reference.__ref]) {
                mergedData.transactions = {
                  ...mergedData.transactions,
                  [reference.__ref]: reference,
                };
              } else {
              }
            });

            return mergedData;
          },
        },
      },
    },
  },
});

persistCache({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
  persistenceMapper,
  trigger: "write",
  debug: __DEV__,
}).catch((error) => {
  console.error("Failed to restore Apollo cache", error);
});

const client = new ApolloClient({
  cache,
  link: from([retryLink, authLink, errorLink, persistLink, httpLink]),
});

// @ts-ignore
enableFlipperApolloDevtools(client);

export { client };
